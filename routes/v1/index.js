var express = require('express');
var router = express.Router();

module.exports = router

const numerologie = require('../../numerologie')


router.get('/numerologie/:prenom', (req, res) => {
    res.json({
        "prenom": req.params.prenom,
        "numero": numerologie.nombre(req.params.prenom),
    })
})
