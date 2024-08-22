const express = require('express');
const router = express.Router();

// Import models


router.get("/records", (req, res) => {
    res.render("record");
  });
  
  // router.post("/stocks", (req, res) => {
  //   const hhgStock = new Stock(req.body);
  //   hhgStock.save()
  //   .then(() => res.redirect('/dashboard101'));
  //   // console.log(req.body); //prints data to the console terminal
  //   // res.json(req.body); //returns data on the browser in json format
  // });

  module.exports = router;