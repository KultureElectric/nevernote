const mongoose = require("mongoose");

const Note = mongoose.model("note");

module.exports = app => {
  app.get("/api/notes", async (req, res) => {
    const notes = await Note.find({ _user: req.user.id });
    res.send(notes);
  });

  app.post("/api/notes", async (req, res) => {
    const { key } = req.body.blocks[0];
    const body = JSON.stringify(req.body);

    const existingNote = await Note.findOne({ noteKey: key });

    if (existingNote) {
      const updatedNote = await Note.findOneAndUpdate(
        { noteKey: key },
        { body, lastUpdated: new Date() }
      );
      await updatedNote.save();
    } else {
      const newNote = await new Note({
        body,
        lastUpdated: new Date(),
        _user: req.user.id,
        noteKey: key
      });
      await newNote.save();
    }

    const notes = await Note.find({ _user: req.user.id });

    // This forEach might be useless -- update: it's officially useless
    notes.forEach((note, index) => {
      return (notes[index].body = JSON.parse(notes[index].body));
    });

    res.send(notes);
  });
};
