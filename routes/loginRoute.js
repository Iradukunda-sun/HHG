const express = require('express');
const router = express.Router();

// Import models
const Agent = require('../models/agentLogin');

router.get("/logins", (req, res) => {
    res.render("login");
  });
  
  router.post("/logins", (req, res) => {
    const yourLogin = new Login(req.body);
    yourLogin.save()
    .then(() => res.redirect('/dashboard101'));
    // console.log(req.body); //prints data to the console terminal
    // res.json(req.body); //returns data on the browser in json format
  });

  module.exports = router;