const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');

// Import models
const Procurement = require('../models/myProcurement');

router.get("/procurement", (req, res) => {
  res.render("procurement", { title: "Procurement" });
});

router.post("/procurement", async (req, res) => {
  try {
    const myProduce = new Procurement(req.body);
    await myProduce.save();
    res.redirect('/dashboardm');
  } catch (error) {
    res.status(404).send("Unable to save produce")
    console.log("Eroor saving produce", error);

  }
  // console.log(req.body); //prints data to the console terminal
  // res.json(req.body); //returns data on the browser in json format
});


//Get users from the Database
router.get("/produceList", async (req, res) => {
  try {

    const produceItems = await Procurement.find().sort({ $natural: -1 });
    res.render("record", {
      title: "Records",
      produces: produceItems,
    });
    // }else {
    //   res.send("Only managers can access this page");

  } catch (err) {
    res.status(400).send("Unable to find items in Database");

  }
});

// get produce update form
router.get("/updateProduce/:id", async (req, res) => {
  try {
    const item = await Procurement.findOne({ _id: req.params.id });
    res.render("edit-produce", {
      title: "Update Produce",
      produce: item,
    });
  } catch (err) {
    res.status(400).send("Unable to find user in the database");
  }
});


// router.get("/updateProduce/:id", async (req, res) => {
//   try {
//     const item = await Procurement.findOne({ _id: req.params.id });
//     res.render("edit-produce", {
//       title: "Update Produce",
//       produce: item,
//     })
//   } catch (err) {
//     res.status(404).send("Unable to update items");
//   }
// });

// post updated produce

router.post("/updateProduce", async (req, res) => {
  try {
    await Procurement.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/produceList");
  } catch (err) {
    res.status(404).send("Unable to update item in the database");
  }
});







// AGGREGATIONS

router.get("/stock",  async (req, res) => {
  // req.session.user = req.user;
  // if (req.user.role == 'manager') {
    try {

      // instantiate a crop variable you will use to select a crop.
      let selectedProduce;
      if (req.query.searchProduce)
        selectedProduce = req.query.searchProduce
      // Query for returning all tonnage and revenue of a produce
      let items = await Procurement.find({ cropName: selectedProduce });

      // console.log("products from the db", goods)
      // console.log("products from the db after search", items)

      let totalBeans = await Procurement.aggregate([
        { $match: { cropName: 'beans' } },
        {
          $group: {
            _id: "$all",
            stockQuantity: { $sum: "$tonnage" },
            totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } }, // or as below
            // totalExpense: { $sum: { $multiply: [ "$produceCost", "$tonnage" ]}},
            totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },
          }
        }
      ])

      let totalMaize = await Procurement.aggregate([
        { $match: { cropName: 'maize' } },
        {
          $group: {
            _id: "$all",
            stockQuantity: { $sum: "$tonnage" },
            totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } },
            totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },


          }
        }
      ])
      let totalRice = await Procurement.aggregate([
        { $match: { cropName: 'rice' } },
        {
          $group: {
            _id: "$all",
            stockQuantity: { $sum: "$tonnage" },
            totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } }, // or as below
            // totalExpense: { $sum: { $multiply: [ "$produceCost", "$tonnage" ]}},
            totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },
          }
        }
      ])

      let totalSoy = await Procurement.aggregate([
        { $match: { cropName: 'soy' } },
        {
          $group: {
            _id: "$all",
            stockQuantity: { $sum: "$tonnage" },
            totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } }, // or as below
            // totalExpense: { $sum: { $multiply: [ "$produceCost", "$tonnage" ]}},
            totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },
          }
        }
      ])

      let totalGnuts = await Procurement.aggregate([
        { $match: { cropName: 'g-nuts' } },
        {
          $group: {
            _id: "$all",
            stockQuantity: { $sum: "$tonnage" },
            totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } }, // or as below
            // totalExpense: { $sum: { $multiply: [ "$produceCost", "$tonnage" ]}},
            totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },
          }
        }
      ])

      let totalCowpeas = await Procurement.aggregate([
        { $match: { cropName: 'cow-peas' } },
        {
          $group: {
            _id: "$all",
            stockQuantity: { $sum: "$tonnage" },
            totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } }, // or as below
            // totalExpense: { $sum: { $multiply: [ "$produceCost", "$tonnage" ]}},
            totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },
          }
        }
      ])

      // Get total quantity and cost of a produce
      let totalCrop = await Procurement.aggregate([
        { $match: { cropName: selectedProduce } },
        {
          $group: {
            _id: "$cropName",
            stockQuantity: { $sum: "$tonnage" },
            totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } },
            totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },
          }
        }
      ])

      res.render("stock", {
        title: 'Stock',
        produces: items,
        totalbeans: totalBeans[0],
        totalmaize: totalMaize[0],
        totalrice: totalRice[0],
        totalsoy: totalSoy[0],
        totalgnuts: totalGnuts[0],
        totalcowpeas: totalCowpeas[0],
        totalcrop: totalCrop[0],
      });
    } catch (error) {
      res.status(400).send("unable to find items in the database");
      console.log(error)
    }
  // } else {
  //   res.send("This page is only accessed by managers")
  // }
});







// // delete Produce
router.post("/deleteProduce", async (req, res) => {
  try {
    await Procurement.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (err) {
    res.status(400).send("Unable to delete item in the database");
  }
});

module.exports = router;