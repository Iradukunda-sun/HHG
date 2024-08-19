const express = require('express');
const router = express.Router();

// Import models
const Procurement = require('../models/myProcurement');

router.get("/procurement", (req, res) => {
    res.render("procurement");
  });
  
  router.post("/procurement", (req, res) => {
    const myProduce = new Procurement(req.body);
    myProduce.save()
    .then(() => res.redirect('/dashboard1'));
    // console.log(req.body); //prints data to the console terminal
    // res.json(req.body); //returns data on the browser in json format
  });


  //Get users from the Database
router.get("/produceList", async (req, res) => {
  try {
    if (req.session.user.role === "manager") {
      const produceItems = await Procurement.find().sort({ $natural: -1 });
      res.render("stock", {
        title: "Records",
        produces: produceItems,
      });
    }else {
      res.send("Only managers can access this page");
    }
  } catch (error) {
    res.status(400).send("Unable to find items in Database");

  }
});

// get produce update form
router.get("/updateProduce/:id", async (req, res) => {
  try {
    const item = await Procurement.findOne({ _id: req.params.id });
    res.render("edit-produce", {
      title: "Update Produce",
      produce: item,
    });
  } catch (err) {
    res.status(400).send("Unable to find user in the database");
  }
});

// post updated produce
router.post("/updateProduce ", async (req, res) => {
  try {
    await Signup.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/produceList");
  } catch (err) {
    res.status(404).send("Unable to update item in the database");
  }
});

// // delete Produce
router.post("/deleteProduce", async (req, res) => {
  try {
    await Signup.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (err) {
    res.status(400).send("Unable to delete user in the database");
  }
});

  module.exports = router;