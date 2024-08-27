const express = require('express');
const router = express.Router();
// const connectEnsureLogin = require('connect-ensure-login');

// Import models
const Procurement = require('../models/myProcurement');

router.get("/procurement", (req, res) => {
  res.render("procurement", { title: "Procurement" });
});

router.post("/procurement", async (req, res) => {
  try {
    const myProduce = new Procurement(req.body);
    await myProduce.save();
    res.redirect('/dashboardm');
  } catch (error) {
    res.status(404).send("Unable to save produce")
    console.log("Eroor saving produce", error);

  }
  // console.log(req.body); //prints data to the console terminal
  // res.json(req.body); //returns data on the browser in json format
});


//Get users from the Database
router.get("/produceList", async (req, res) => {
  try {

    const produceItems = await Procurement.find().sort({ $natural: -1 });
    res.render("record", {
      title: "Records",
      produces: produceItems,
    });
    // }else {
    //   res.send("Only managers can access this page");
  
  } catch (err) {
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


router.get("/updateProduce/:id", async (req, res) => {
  try {
    const item = await Procurement.findOne({ _id: req.params.id });
    res.render("edit-produce", {
      title: "Update Produce",
      produce: item,
    })
  } catch (err) {
    res.status(404).send("Unable to update items");
  }
});

// post updated produce

router.post("/updateProduce", async (req, res) => {
  try {
    await Procurement.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.redirect("/produceList");
  } catch (err) {
    res.status(404).send("Unable to update item in the database");
  }
});

// // delete Produce
router.post("/deleteProduce", async (req, res) => {
  try {
    await Procurement.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (err) {
    res.status(400).send("Unable to delete item in the database");
  }
});

module.exports = router;