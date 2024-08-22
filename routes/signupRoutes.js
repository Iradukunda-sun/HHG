const express = require('express');
const router = express.Router();
const passport = require('passport');




// Register admin
const Signup = require('../models/sign');

router.get("/register", (req, res) => {
  res.render("signup", { title: "Sign up " });
});


router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    // added
    const existingUser = await Signup.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(400)
        .send("Not registered, a user with a similar email already exists!");
    }
    const user = new Signup(req.body);
    //added
    // await user.save() //used for saving any information to the database
    await Signup.register(user, req.body.password, (err) => {  //used to register a user who will later log in
      if (err) {
        throw err;
      }
      res.redirect("/login");
    });
  } catch (err) {
    res.status(400).render("signup", { title: "Signup" });
    console.log("Signup user error", err);
  }
});
//  Login admin
// router.get("/login", (req, res) => {
//   res.render("login");
// });

// router.post("/login", passport.authenticate("local", { failureRedirect: "/login" }),
// (req, res) => {
// req.session.user = req.user; //assigning a session to a user who has logged in
// if(req.user.role === "manager"){
//   res.redirect("/enter");
// // res.redirect("/managerdashboard");
// res.send("Manager dashboard");
// } else if(req.user.role === "salesagent"){
// // res.redirect("/salesdashboard");
// res.send("Saleagent dashboard");
// } else {
// res.send("user with that role does not exist in the system")
// }

// }
// );





//Get users from the Database
router.get("/data", async (req, res) => {
  try {
    if (req.session.user.role === "manager") {
      const theUsers = await Signup.find().sort({ $natural: -1 });
      res.render("user-management", {
        title: "Users",
        signins: theUsers,
      });
    }else {
      res.send("Only managers can access this page");
    }
  } catch (error) {
    res.status(400).send("Unable to find users in Database");

  }
});

// get user update form
router.get("/updateUser/:id", async (req, res) => {
  try {
    const item = await Signup.findOne({ _id: req.params.id });
    res.render("update-user", {
      title: "Update User",
      signin: item,
    });
  } catch (err) {
    res.status(400).send("Unable to find user in the database");
  }
});

// post updated produce
router.post("/updateUser", async (req, res) => {
  try {
    await Signup.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/data");
  } catch (err) {
    res.status(404).send("Unable to update user in the database");
  }
});

// // delete Produce
router.post("/deleteUser", async (req, res) => {
  try {
    await Signup.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (err) {
    res.status(400).send("Unable to delete user in the database");
  }
});


module.exports = router;