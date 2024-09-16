const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');

// Import models


router.get("/dashboardm", (req, res) => {
    res.render("dashboard2");
  });
  
  // AGGREGATIONS

// router.get("/dashboardm",   connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
//   // req.session.user = req.user;
//   // if (req.user.role == 'manager') {
//   try {

//     // instantiate a crop variable you will use to select a crop.
//     let selectedProduce;
//     if (req.query.searchProduce)
//       selectedProduce = req.query.searchProduce
//     // Query for returning all tonnage and revenue of a produce
//     let items = await Procurement.find({ cropName: selectedProduce });

//     // console.log("products from the db", goods)
//     // console.log("products from the db after search", items)

//     let totalBeans = await Procurement.aggregate([
//       { $match: { cropName: 'beans' } },
//       {
//         $group: {
//           _id: "$all",
//           stockQuantity: { $sum: "$tonnage" },
//           // totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } }, // or as below
//           // // totalExpense: { $sum: { $multiply: [ "$produceCost", "$tonnage" ]}},
//           // totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },
//         }
//       }
//     ])
//     let soldBeans = await Sale.aggregate([
//       { $match: { cropName: "beans" } },
//       { $group: { _id: "$all", totalSold: { $sum: "$tonnage" } } },

//     ])
//     let totalMaize = await Procurement.aggregate([
//       { $match: { cropName: 'maize' } },
//       {
//         $group: {
//           _id: "$all",
//           stockQuantity: { $sum: "$tonnage" },
//           // totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } },
//           // totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },


//         }
//       }
//     ])
//     let soldMaize = await Sale.aggregate([
//       { $match: { cropName: "maize" } },
//       { $group: { _id: "$all", totalSold: { $sum: "$tonnage" } } },
//     ])
//     let totalRice = await Procurement.aggregate([
//       { $match: { cropName: 'rice' } },
//       {
//         $group: {
//           _id: "$all",
//           stockQuantity: { $sum: "$tonnage" },

//         }
//       }
//     ])
//     let soldRice = await Sale.aggregate([
//       { $match: { cropName: "rice" } },
//       { $group: { _id: "$all", totalSold: { $sum: "$tonnage" } } },
//     ])

//     let totalSoy = await Procurement.aggregate([
//       { $match: { cropName: 'soy' } },
//       {
//         $group: {
//           _id: "$all",
//           stockQuantity: { $sum: "$tonnage" },
//           // totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } }, // or as below
//           // // totalExpense: { $sum: { $multiply: [ "$produceCost", "$tonnage" ]}},
//           // totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },
//         }
//       }
//     ])
//     let soldSoy = await Sale.aggregate([
//       { $match: { cropName: "soy" } },
//       { $group: { _id: "$all", totalSold: { $sum: "$tonnage" } } },
//     ])

//     let totalGnuts = await Procurement.aggregate([
//       { $match: { cropName: 'g-nuts' } },
//       {
//         $group: {
//           _id: "$all",
//           stockQuantity: { $sum: "$tonnage" },
//           // totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } }, // or as below
//           // // totalExpense: { $sum: { $multiply: [ "$produceCost", "$tonnage" ]}},
//           // totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },
//         }
//       }
//     ])
//     let soldGnuts = await Sale.aggregate([
//       { $match: { cropName: "g-nuts" } },
//       { $group: { _id: "$all", totalSold: { $sum: "$tonnage" } } },
//     ])

//     let totalCowpeas = await Procurement.aggregate([
//       { $match: { cropName: 'cow-peas' } },
//       {
//         $group: {
//           _id: "$all",
//           stockQuantity: { $sum: "$tonnage" },
//           // totalExpense: { $sum: { $multiply: ["$cost", "$tonnage"] } }, // or as below
//           // // totalExpense: { $sum: { $multiply: [ "$produceCost", "$tonnage" ]}},
//           // totalProjectedRevenue: { $sum: { $multiply: ["$saleprice", "$tonnage"] } },
//         }
//       }
//     ])
//     let soldCowpeas = await Sale.aggregate([
//       { $match: { cropName: "cow-peas" } },
//       { $group: { _id: "$all", totalSold: { $sum: "$tonnage" } } },
//     ])


//     res.render("dashboard2", {
//       title: 'Stock',
//       produces: items,
//       totalbeans: totalBeans[0],
//       totalmaize: totalMaize[0],
//       totalrice: totalRice[0],
//       totalsoy: totalSoy[0],
//       totalgnuts: totalGnuts[0],
//       totalcowpeas: totalCowpeas[0],
//       soldBeans: soldBeans[0],
//       soldMaize: soldMaize[0],
//       soldRice: soldRice[0],
//       soldSoy: soldSoy[0],
//       soldGnuts: soldGnuts[0],
//       soldCowpeas: soldCowpeas[0],

//     });
//   } catch (error) {
//     res.status(400).send("unable to find items in the database");
//     console.log(error)
//   }
//   // } else {
//   //   res.send("This page is only accessed by managers")
//   // }
// });


 

  module.exports = router;