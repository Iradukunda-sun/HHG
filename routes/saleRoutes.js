const express = require('express');
const router = express.Router();
// const connectEnsureLogin = require('connect-ensure-login');

// Import models
const Sale = require('../models/mySales');
// const Signup = require('../models/Signup');
// const Procurement = require('../models/myProcurement');




//Routes for making sale
router.get("/sale", (req, res) => {
  res.render("sale", { title: "Sales" });
});

router.post("/sale", async (req, res) => {
  try {
    const mySale = new Sale(req.body);
    await mySale.save();
    res.redirect('/dashboardm');
  } catch (error) {
    res.status(404).send("Unable to save sale")
    console.log("Error saving sale", error);

  }
  // console.log(req.body); //prints data to the console terminal
  // res.json(req.body); //returns data on the browser in json format
});
//function to format date
function formatDate(date) {
  return date.toISOString().split("T")[0];
}


//Get users from the Database
router.get("/saleList", async (req, res) => {
  try {

    const saleItems = await Sale.find().sort({ $natural: -1 });
    res.render("sales_list", {
      title: "Sale Records",
      sales: saleItems,
    });
    // }else {
    //   res.send("Only managers can access this page");
  
  } catch (err) {
  res.status(400).send("Unable to find items in Database");

}
});

// get produce update form
router.get("/updateSale/:id", async (req, res) => {
  try {
    const item = await Sale.findOne({ _id: req.params.id });
    res.render("edit-sale", {
      title: "Update Sale",
      sale: item,
    });
  } catch (err) {
    res.status(400).send("Unable to find user in the database");
  }
});


router.get("/updateSale/:id", async (req, res) => {
  try {
    const item = await Sale.findOne({ _id: req.params.id });
    res.render("edit-sale", {
      title: "Update Sale",
      sale: item,
    })
  } catch (err) {
    res.status(404).send("Unable to update items");
  }
});

// post updated produce

router.post("/updateSale", async (req, res) => {
  try {
    await Sale.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.redirect("/saleList");
  } catch (err) {
    res.status(404).send("Unable to update item in the database");
  }
});

// // delete Produce
router.post("/deleteSale", async (req, res) => {
  try {
    await Sale.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (err) {
    res.status(400).send("Unable to delete item in the database");
  }
});

//generating a receipt

router.get("/receipt/:id", async (req, res) => {
  try {
    const sale = await Sale.findOne({ _id: req.params.id })
    .populate("cropName","cropName"

    )
    const formattedDate = formatDate(sale.saledate);
    res.render("receipt", { 
      sale,
      formattedDate,
      title: "Sale Receipt"
     });
  } catch (err) {
    res.status(400).send("Unable to item sale in the database");
  }
});

module.exports = router;

// router.get("/addSale/:id", async(req, res) => {
//   try {
//   // const agents = await Signup.find({ role: "salesagent" });
//   const produce = await Procurement.findOne({ _id: req.params.id })
//   res.render("sale", {
//   title: "Sale",
//   // agents: agents,
//   produce: produce
//   });
//   } catch (error) {
//   res.status(400).send("Unable to find sales agents in the database");
//   }
//   });
  
//   router.post('/addSale/:id', async (req, res) => {
//   try {
//   const { saleTonnage } = req.body;
//   // saleTonnage is the same as req.body.saleTonnage, it's an input name in the add sale pug file
//   const produce = await Produce.findById({ _id: req.params.id });
//   if (!produce) {
//   return res.status(404).send('produce not found');
//   }
  
//   if (produce.tonnage < saleTonnage ) {
//   return res.status(400).send(`Not enough tones in stock,there are ${produce.tonnage} Kgs in stock`);
//   }
//   if (produce && produce.tonnage > 0) {
//   const newsale = new Sale(req.body);
//   await newsale.save();
//   produce.tonnage -= saleTonnage; // short form of what is below
//   // produce.tonnage = produce.tonnage - saleTonnage // long form of the above
//   await produce.save();
//   res.redirect("/salesList");
//   } else {
//   return res.status(404).json({ error: 'Produce out of stock' });
//   }
//   } catch (error) {
//   console.error('Error saling produce:', error);
//   return res.status(500).json({ error: 'Internal server error' });
//   }
//   });
  
//   // retrieve sales from the database
//   router.get("/salesList", async (req, res) => {
//   try {
//   const sales = await Sale.find()
//   .sort({$natural:-1})
//   .populate("cropName", "cropName")
//   // .populate("salesAgent", "firstName lastName")
//   res.render("sales_list", {
//   title: "Sales List",
//   sales: sales,
//   });
//   } catch (error) {
//   res.status(400).send("Unable to find items in the database");
//   }
//   });

// // router.get("/sale", (req, res) => {
// //     res.render("sale");
// //   });
  
// //   router.post("/sales", (req, res) => {
// //     const hhgSale = new Sale(req.body);
// //     hhgSale.save()
// //     .then(() => res.redirect('/dashboard1'));
// //     // console.log(req.body); //prints data to the console terminal
// //     // res.json(req.body); //returns data on the browser in json format
// //   });

  