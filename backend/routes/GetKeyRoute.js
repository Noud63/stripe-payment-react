const express = require('express');
const router = express.Router()
const dotenv = require('dotenv')
dotenv.config()


router.get("/", (req, res) => {
    res.send({
        publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
    });
});


module.exports = router