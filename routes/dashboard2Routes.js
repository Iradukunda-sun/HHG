const express = require('express');
const router = express.Router();

// Import models


router.get("/dashboard2", (req, res) => {
    res.render("dashboard2");
  });
  
 

  module.exports = router;