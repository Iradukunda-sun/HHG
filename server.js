//Dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const moment = require('moment');
const expressSession = require('express-session') ({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,

});
require("dotenv").config();


//Import models
const Signup = require('./models/sign')
//Import routes


const signupRoutes = require("./routes/signupRoutes")
const loginRoutes = require("./routes/loginRoutes")
const landingRoutes = require("./routes/landingRoutes")
const dashboard1Routes = require("./routes/dashboard1Routes")
const dashboard2Routes = require("./routes/dashboard2Routes.js")
const procurementRoutes = require("./routes/procurementRoutes")
const saleRoutes = require("./routes/saleRoutes")
const creditRoutes = require("./routes/creditRoutes")
const stockRoutes = require("./routes/recordRoutes")
const reportRoutes = require("./routes/reportRoutes")


//Instatiations
const app = express();
const port = 3000;


//Configurations
// set db connection to mongoose
mongoose.connect(process.env.DATABASE_LOCAL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
  });






//set the views path
//set view engine to pug
app.locals.moment = moment
app.set('view engine', 'pug');//specify the view engine
app.set('views', path.join(__dirname, 'views')); //specify the views directory


//MIDDLEWARE
app.use(express.static(path.join(__dirname, "public"))); //specify a folder for static files
app.use(express.urlencoded({ extended: true })); //helps to parse data from forms
app.use(express.json()); //helps to capture data in json format

// // added
// // express session configs
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

// // passport configs
passport.use(Signup.createStrategy());
passport.serializeUser(Signup.serializeUser());
passport.deserializeUser(Signup.deserializeUser());



//Routes
//use routes/use imported routes
app.use("/", signupRoutes);
app.use("/", loginRoutes);
app.use("/", landingRoutes);


app.use("/", dashboard1Routes);

app.use("/", dashboard2Routes);
app.use("/", procurementRoutes);
app.use("/", saleRoutes);
app.use("/", creditRoutes);
app.use("/", stockRoutes);

app.use("/", reportRoutes);








//error message
app.get("*", (req, res) => {
  res.send("error! page does not exist");
});



//Bootstraping a server
// app.listen(3000, () => console.log('listening on port 3000')); // new
app.listen(port, () => console.log(`listening on port ${port}`));