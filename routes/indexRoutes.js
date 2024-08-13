const express = require('express');
const router = express.Router();

// Import models
const Agent = require('../models/index');

router.get("/signup", (req, res) => {
    res.render("index",);
  });
  
  router.post("/signup", (req, res) => {
    const agentSignup = new Signup(req.body);
    agentSignup.save()
    .then(() => res.redirect('/login'));
    // console.log(req.body); //prints data to the console terminal
    // res.json(req.body); //returns data on the browser in json format
  });

  module.exports = router;