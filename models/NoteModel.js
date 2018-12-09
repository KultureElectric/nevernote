const mongoose = require("mongoose");
const { Schema } = mongoose;

const NoteSchema = new Schema({
  body: String,
  lastUpdated: Date,
  _user: { type: Schema.Types.ObjectId, ref: "user" }
});

mongoose.model("note", NoteSchema);