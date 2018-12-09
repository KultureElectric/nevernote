const mongoose = require("mongoose");

const Note = mongoose.model("note");

module.exports = app => {
  app.post("/api/notes", async (req, res) => {
    const { body } = req.body;

    const note = new Note({
      body,
      lastUpdated: Date.now(),
      _user: req.user.id
    });

    try {
      await note.save();

      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
