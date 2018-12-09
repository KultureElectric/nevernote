const mongoose = require("mongoose");
const { Schema } = mongoose;

const NoteSchema = new Schema({
  body: String,
  lastUpdated: Date,
  dateCreated: Date
});

mongoose.model("note", NoteSchema);
