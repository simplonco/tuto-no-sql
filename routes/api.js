const express = require('express');
const router = express.Router();

// CORS
router.use(function(req,res,next){
    if (!process.env.NODE_ENV) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Otop-API, Authorization');
    }

    next();
});

module.exports = router;
