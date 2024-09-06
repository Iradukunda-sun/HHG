const express = require('express');
const router = express.Router();

// Import models

router.get("/admin", (req, res) => {
    res.render("admin-dashboard");
    
  });
 

  module.exports = router;