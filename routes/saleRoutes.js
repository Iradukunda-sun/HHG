const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');

// Import models
const Sale = require('../models/mySales');



//Routes for making sale

router.get("/addSale/:id", async(req, res) => {
  try {
  const agents = await Signup.find({ role: "salesagent" });
  const produce = await Produce.findOne({ _id: req.params.id })
  res.render("add_sale", {
  title: "Sale",
  agents: agents,
  produce: produce
  });
  } catch (error) {
  res.status(400).send("Unable to find sales agents in the database");
  }
  });
  
  router.post('/addSale/:id', async (req, res) => {
  try {
  const { saleTonnage } = req.body;
  // saleTonnage is the same as req.body.saleTonnage, it's an input name in the add sale pug file
  const produce = await Produce.findById({ _id: req.params.id });
  if (!produce) {
  return res.status(404).send('produce not found');
  }
  
  if (produce.tonnage < saleTonnage ) {
  return res.status(400).send(`Not enough tones in stock,there are ${produce.tonnage} Kgs in stock`);
  }
  if (produce && produce.tonnage > 0) {
  const newsale = new Sale(req.body);
  await newsale.save();
  produce.tonnage -= saleTonnage; // short form of what is below
  // produce.tonnage = produce.tonnage - saleTonnage // long form of the above
  await produce.save();
  res.redirect("/salesList");
  } else {
  return res.status(404).json({ error: 'Produce out of stock' });
  }
  } catch (error) {
  console.error('Error saling produce:', error);
  return res.status(500).json({ error: 'Internal server error' });
  }
  });
  
  // retrieve sales from the database
  router.get("/salesList", async (req, res) => {
  try {
  const sales = await Sale.find()
  .sort({$natural:-1})
  .populate("produceName", "produceName")
  .populate("salesAgent", "firstName lastName")
  res.render("sales_list", {
  title: "Sales List",
  sales: sales,
  });
  } catch (error) {
  res.status(400).send("Unable to find items in the database");
  }
  });

// router.get("/sale", (req, res) => {
//     res.render("sale");
//   });
  
//   router.post("/sales", (req, res) => {
//     const hhgSale = new Sale(req.body);
//     hhgSale.save()
//     .then(() => res.redirect('/dashboard1'));
//     // console.log(req.body); //prints data to the console terminal
//     // res.json(req.body); //returns data on the browser in json format
//   });

  module.exports = router;