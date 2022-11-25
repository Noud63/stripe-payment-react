const express = require('express');
const router = express.Router()
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const stripe = require('stripe')(process.env.YOUR_SECRET_KEY);
app.use(express.static('public'))


const YOUR_DOMAIN = 'http://localhost:3000';

router.post('/', async (req, res) => {

    const line_items = req.body.cart.map(product => {
        return {
            price_data: {
                currency: "eur",
                product_data: {
                    name: product.name,
                    images: ['https://images.unsplash.com/photo-1665292273316-d4c7fa56aaa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb3Rlc3QlMjBpcmFufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'],
                    metadata: {
                        id: product.id
                    },
                    // description: ''
                },
                unit_amount: product.price,   // in cents = 9.95 euro
            },
            quantity: product.units,
        }
    });

    const session = await stripe.checkout.sessions.create({

        // payment_method_types: ["ideal", "card", "bancontact"],
        shipping_address_collection: {
            allowed_countries: ["NL", "DE", "BE", "FR", "GB", "IT", "ES", "PT", "CH", "IE", "NO", "SE"],
        },
        shipping_options: [
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 0,
                        currency: "eur",
                    },
                    display_name: "Free shipping",
                    // Delivers between 5-7 business days
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 5,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 7,
                        },
                    },
                },
            },
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 1500,
                        currency: "eur",
                    },
                    display_name: "Next day air",
                    // Delivers in exactly 1 business day
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 1,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 1,
                        },
                    },
                },
            },
        ],
        phone_number_collection: {
            enabled: true,
        },

        line_items,
        mode: 'payment',
        success_url: "http://localhost:3000/completion",
        cancel_url: "http://localhost:3000/",
    });
    res.send({ url: session.url });
});


module.exports = router