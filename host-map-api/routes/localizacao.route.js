const express = require('express');
let router = express.Router();

router.get('/', (req,res, next) => {

   res.status(200).json({nome : 'Flávio'});
});

router.post('/', (req,res, next) => {

    let data = req.body;
    data.name = 'teste';
    res.status(201).json(data);
});

router.put('/', (req,res, next) => {

    let data = req.body;
    res.status(200).json(data);
});

router.delete('/', (req,res, next) => {

    res.status(200).json({nome : 'Flávio'});
});



module.exports = router;
