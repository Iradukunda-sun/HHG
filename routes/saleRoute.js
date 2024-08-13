const express = require('express');
const router = express.Router();

// Import models
const Sale = require('../models/mySales');

router.get("/sales", (req, res) => {
    res.render("sale");
  });
  
  router.post("/sales", (req, res) => {
    const hhgSale = new Sale(req.body);
    hhgSale.save()
    .then(() => res.redirect('/dashboard101'));
    // console.log(req.body); //prints data to the console terminal
    // res.json(req.body); //returns data on the browser in json format
  });

  module.exports = router;