const express = require('express');
const router = express.Router();

// Import models


router.get("/dashboardm", (req, res) => {
    res.render("dashboard2");
  });
  
 

  module.exports = router;