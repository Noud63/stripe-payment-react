const express = require('express');
const router = express.Router()
const dotenv = require('dotenv')
dotenv.config()
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);


router.post("/", async (req, res) => {

    let amount = 995
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "eur",
            amount: amount,
            automatic_payment_methods: { enabled: true },
        });

        // Send publishable key and PaymentIntent details to client
        res.send({
            clientSecret: paymentIntent.client_secret,
            paymentIntent: paymentIntent
        });
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message
            },
        });
    }
});

module.exports = router