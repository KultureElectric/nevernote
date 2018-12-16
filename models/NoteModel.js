const mongoose = require("mongoose");
const { Schema } = mongoose;

const NoteSchema = new Schema({
  title: String,
  body: String,
  lastUpdated: Date,
  dateCreated: Date,
  _user: { type: Schema.Types.ObjectId, ref: "user" },
  noteKey: String
});

mongoose.model("note", NoteSchema);
