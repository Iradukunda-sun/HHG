const express = require('express');
const router = express.Router();

// Import models
const Credit = require('../models/creditSales');

router.get("/credit", (req, res) => {
    res.render("credit-sales");
  });
  
  router.post("/credit", (req, res) => {
    const creditRecords = new Credit(req.body);
    creditRecords.save()
    .then(() => res.redirect('/dashboard1'));
    // console.log(req.body); //prints data to the console terminal
    // res.json(req.body); //returns data on the browser in json format
  });

  module.exports = router;