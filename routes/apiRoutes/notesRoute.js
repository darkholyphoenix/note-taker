const router = require('express').Router();
const { createNewNote, validateNote } = require('../../lib/postNotes');
const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
  });

router.post('/notes', (req, res) =>{
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)){
        res.status(400).send('This note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes)
        res.json(note)
    }      
});




module.exports = router;