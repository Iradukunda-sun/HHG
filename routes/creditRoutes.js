const express = require('express');
const router = express.Router();

// Import models
const Credit = require('../models/creditSales');

router.get("/credit", (req, res) => {
    res.render("credit-sales");
  });
  router.post("/credit", async (req, res) => {
    try {
      const myCredit = new Credit(req.body);
      await myCredit.save();
      res.redirect('/creditList');
    } catch (error) {
      res.status(404).send("Unable to save sale")
      console.log("Error saving sale", error);
  
    }
    // console.log(req.body); //prints data to the console terminal
    // res.json(req.body); //returns data on the browser in json format
  });
  
  
  //Get users from the Database
  router.get("/creditList", async (req, res) => {
    try {
  
      const creditItems = await Credit.find().sort({ $natural: -1 });
      res.render("credit-list", {
        title: "Credit Sale Records",
        credits: creditItems,
      });
      // }else {
      //   res.send("Only managers can access this page");
    
    } catch (err) {
    res.status(400).send("Unable to find items in Database");
  
  }
  });
  
  // get produce update form
  router.get("/updateCredit/:id", async (req, res) => {
    try {
      const item = await Credit.findOne({ _id: req.params.id });
      res.render("edit-credit", {
        title: "Update credit-sale",
        credit: item,
      });
    } catch (err) {
      res.status(400).send("Unable to find user in the database");
    }
  });
  
  // post updated produce
  
  router.post("/updateCredit", async (req, res) => {
    try {
      await Credit.findOneAndUpdate({ _id: req.query.id }, req.body);
      res.redirect("/creditList");
    } catch (err) {
      res.status(404).send("Unable to update item in the database");
    }
  });
  
  // // delete Produce
  router.post("/deleteCredit", async (req, res) => {
    try {
      await Credit.deleteOne({ _id: req.body.id });
      res.redirect("back");
    } catch (err) {
      res.status(400).send("Unable to delete item in the database");
    }
  });

  // module.exports = router;
  // router.post("/credit", (req, res) => {
  //   const creditRecords = new Credit(req.body);
  //   creditRecords.save()
  //   .then(() => res.redirect('/dashboard1'));
  //   // console.log(req.body); //prints data to the console terminal
  //   // res.json(req.body); //returns data on the browser in json format
  // });
  module.exports = router;

  