const { Router } = require('express');
const router = Router();

router.get('/', function (req, res) {
    //res.send('[GET]Saludos desde express');
    res.json({"Title": "[GET]Saludos desde express"});
});

router.post('/', function (req, res) {
    res.send('[POST]Saludos desde express');
});

router.put('/', function (req, res) {
    res.send('[Put]Saludos desde express');
});

router.delete('/', function (req, res) {
    res.send('[Delete]Saludos desde express');
});

module.exports = router;