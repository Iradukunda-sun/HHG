const express = require('express');
const router = express.Router();

// Import models
const Agent = require('../models/agent');

router.get("/sales", (req, res) => {
    res.render("sales-agent");
  });
  
  router.post("/sales", (req, res) => {
    const salesAgent = new Agent(req.body);
    salesAgent.save()
    .then(() => res.redirect('/first'));
    // console.log(req.body); //prints data to the console terminal
    // res.json(req.body); //returns data on the browser in json format
  });

  module.exports = router;