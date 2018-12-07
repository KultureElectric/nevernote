const express = require("express");
const mongoose = require("mongoose");
require("./models/userModel");
require("./services/passport");

mongoose.connect("mongodb://localhost/nevernote");

const app = express();

require("./routes/authRoutes")(app);

app.listen(5000, () => console.log("App is running on port 5000"));
