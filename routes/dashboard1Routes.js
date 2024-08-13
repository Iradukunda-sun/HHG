const express = require('express');
const router = express.Router();

// Import models
const Dashboard = require('../models/myDashboard');

router.get("/dashboard101", (req, res) => {
    res.render("dashboard1");
  });
  
  router.post("/dashboard101", (req, res) => {
    const hhg = new Dashboard(req.body);
    hhg.save()
    // .then(() => res.redirect('/first'));
    // console.log(req.body); //prints data to the console terminal
    // res.json(req.body); //returns data on the browser in json format
  });

  module.exports = router;