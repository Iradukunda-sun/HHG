const express = require('express');
const router = express.Router();

// Import models

router.get("/dashboards", (req, res) => {
    res.render("dashboard1");
    
  });
 

  module.exports = router;