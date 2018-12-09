const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
require("./models/userModel");
require("./models/noteModel");
require("./services/passport");
const keys = require("./config/keys");

mongoose.connect("mongodb://localhost/nevernote");

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookieSessionKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

app.listen(5000, () => console.log("App is running on port 5000"));
