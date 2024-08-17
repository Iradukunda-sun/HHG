const express = require('express');
const router = express.Router();


// Import models


router.get("/landing", (req, res) => {
    res.render("landing",);
  });
  
  

  module.exports = router;