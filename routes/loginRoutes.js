const express = require('express');
const router = express.Router();
const passport = require('passport');
// Import models
// const Signup = require('../models/sign');

router.get("/login", (req, res) => {
    res.render("login");
  });
  
  router.post("/login", passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
  req.session.user = req.user; //assigning a session to a user who has logged in
  if(req.user.role === "salesagent"){
      res.redirect("/dashboard1");
  
  // res.send("Manager dashboard");
  } else if(req.user.role === "manager"){
  res.redirect("/dashboard2");
  // res.send("Saleagent dashboard");
  } else {
  res.send("user with that role does not exist in the system")
  }
  
  }
  );
  // // Logout route
// router.get("/logout", (req, res) => {
//   if (req.session) {
//   req.session.destroy((err) => {
//   if (err) {
//   return res.status(500).send("Error logging out");
//   }
//   res.redirect("/");
//   });
//   }
//   });

  

  module.exports = router;