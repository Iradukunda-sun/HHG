const express = require('express');
const router = express.Router();

// Import models
const Receipt = require('../models/myReceipt');

router.get("/receipts", (req, res) => {
    res.render("receipt");
  });
  
  router.post("/receipts", (req, res) => {
    const hhgReceipt = new Receipt(req.body);
    Receipt.save()
    .then(() => res.redirect('/sales'));
    // console.log(req.body); //prints data to the console terminal
    // res.json(req.body); //returns data on the browser in json format
  });

  module.exports = router;