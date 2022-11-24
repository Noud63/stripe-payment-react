const express = require("express");
const app = express();
const cors = require('cors')
const dotenv = require('dotenv')
app.use(cors())
app.use(express.json())
dotenv.config()

app.use('/config', require('./routes/GetKeyRoute'))
app.use('/create-payment-intent', require('./routes/PaymentIntentRoute'))
app.use('/stripe', require('./routes/checkoutRoute'))

app.listen(5000, () =>
    console.log(`Node server listening at http://localhost:5000`)
);