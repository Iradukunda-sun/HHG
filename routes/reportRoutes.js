const express = require('express');
const router = express.Router();

// Import models
const Report = require('../models/myReport');

router.get("/report", (req, res) => {
    res.render("report");
  });
  
  router.post("/report", (req, res) => {
    const hhgReport = new Report(req.body);
    hhgReport.save()
    .then(() => res.redirect('/stock'));
    // console.log(req.body); //prints data to the console terminal
    // res.json(req.body); //returns data on the browser in json format
  });

  module.exports = router;