const express = require('express');
const router = express.Router()
const dotenv = require('dotenv')
dotenv.config()


router.get("/", (req, res) => {
    res.send({
        publishableKey: process.env.YOUR_PUBLISHABLE_KEY,
    });
});


module.exports = router