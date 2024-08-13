const express = require('express');
const router = express.Router();

// Import models
const Procurement = require('../models/myProcurement');

router.get("/procurements", (req, res) => {
    res.render("procurement");
  });
  
  router.post("/procurements", (req, res) => {
    const myProduce = new Procurement(req.body);
    myProduce.save()
    .then(() => res.redirect('/dashboard101'));
    // console.log(req.body); //prints data to the console terminal
    // res.json(req.body); //returns data on the browser in json format
  });

  module.exports = router;