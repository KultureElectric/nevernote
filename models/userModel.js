const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: String,
  email: String,
  name: String
});

mongoose.model("user", UserSchema);
