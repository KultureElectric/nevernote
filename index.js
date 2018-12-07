const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
require("./models/userModel");
require("./services/passport");

mongoose.connect("mongodb://localhost/nevernote");

const app = express();

app.use(passport.initialize());

require("./routes/authRoutes")(app);

app.listen(5000, () => console.log("App is running on port 5000"));
