const fs = require("fs");
const path = require("path");


function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes }, null, 2)
    );
    return note;
  }

  function validateNote(notes) {
    if (notes.title === "") {
      return false;
    }
    if (notes.text === "") {
      return false;
    }
    return true;
  }

module.exports = {
    createNewNote,
    validateNote
}