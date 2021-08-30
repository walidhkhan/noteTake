const router = require('express').Router();
const fs = require('fs');
const db = require('../db/db.json');

router.get('/notes', (req, res) => {
    res.json(db);
});

router.post('/notes', (req, res) => {
    req.body.id = db.length.toString();
    const { id, title, text } = req.body;
    const newNote = { id, title, text };
    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
})


router.delete('/notes/:id', (req, res) => {
    db.splice(db.findIndex(v => v.id === req.params.id), 1);
    // const result = db.filter(note => note.id === req.params.id)[0];
    // if (result) {
    //     db.splice(result);
    // } else {
    //     res.send(404);
    // };

    fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
    });

    module.exports = router;

