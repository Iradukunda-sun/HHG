const express = require('express');
const router = express.Router();

// Import models
const Management = require('../models/userManagement');

router.get("/managements", (req, res) => {
    res.render("user-management");
  });
  
  router.post("/managements", (req, res) => {
    const myUser = new Management(req.body);
    salesAgent.save()
    .then(() => res.redirect('/dashboard101'));
    // console.log(req.body); //prints data to the console terminal
    // res.json(req.body); //returns data on the browser in json format
  });

  module.exports = router;