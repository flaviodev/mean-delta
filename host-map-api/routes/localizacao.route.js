const express = require('express');
let router = express.Router();

router.get('/save', (req,res, next) => {
   res.send("save");
});

module.exports = router;
