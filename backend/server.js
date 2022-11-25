const express = require("express");
const app = express();
const cors = require('cors')
const dotenv = require('dotenv')
const port = process.env.REACT_APP_PORT || 5000
app.use(cors())
app.use(express.json())
dotenv.config()

app.use('/getPubKey', require('./routes/GetKeyRoute'))
app.use('/stripepaymentelement', require('./routes/PaymentIntentRoute'))
app.use('/stripeCheckout', require('./routes/checkoutRoute'))

app.listen(5000, () =>
    console.log(`Node server listening at http://localhost:${port}`)
);