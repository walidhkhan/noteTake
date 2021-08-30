const router = require('express').Router();
const fs = require('fs');

const db = require('../db/db.json');

router.get('/notes', (req, res) => {
    res.json(db);
});

// router.get('/notes', (req, res) => {
//     const result = findbyId(req.params.id, db);
//     if (result) {
//         res.JSON(result);
//         console.log(result);
//     } else {
//         res.send(404);
//     }
// });

router.post('/notes', (req, res) => {
    // req.body.id = db.length.toString();
    const id = db.length.toString();
    const {title, text} = req.body;
    const newNote = {id,title,text};
    db.push(newNote);
    // fs.writeFileSync(
    //     path.join(__dirname, 'db/db.json'),
    //     JSON.stringify({ db }, null, 2)
    //   );
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.JSON(db);
})

module.exports = router;

