const express = require('express');
const router = express.Router();

// Import models
const Stock = require('../models/myStock');

router.get("/stocks", (req, res) => {
    res.render("stock");
  });
  
  router.post("/stocks", (req, res) => {
    const hhgStock = new Stock(req.body);
    hhgStock.save()
    .then(() => res.redirect('/dashboard101'));
    // console.log(req.body); //prints data to the console terminal
    // res.json(req.body); //returns data on the browser in json format
  });

  module.exports = router;