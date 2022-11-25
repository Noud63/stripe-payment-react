

<h1>Stripe Payment Methods</h1>


Stripe makes working with payments easy.<br>
Here are three common use cases of accepting payments with Stripe.<br>

<ul>
<li>Payment Element</li>
<li>Checkout</li>
<li>Payment Link</li>
</ul>

In order to use this code you first need to create a Stripe account, you can do that <a href="https://dashboard.stripe.com/register?redirect=%2Ftest%2Fdashboard">here</a>.<br>
Install the stripe web SDK's.<br>
For the backend -> npm install stripe --save.<br>
For the frontend -> npm install --save @stripe/react-stripe-js @stripe/stripe-js.<br>

Then, once registered, get your own publishable key and secret key and store them in a .env file in the root of your project and add it to your gitignore file.<br>
Replace the YOUR_PUBLISHABLE_KEY and YOUR_SECRET_KEY variables with your own variables.<br>

For the Stripe Elements as well as Stripe checkout you need to set up a server in order to protect your secret key.<br>
In this example I set up a server with Express/Node.<br>
Never expose your secret key inside the client side of your app!<br>

You can fully customize the look and feel of your Stripe Elements by using the <a href="https://stripe.com/docs/elements/appearance-api">Elements Appearance API.</a><br>
Style your Stripe Checkout by using the <a href="https://stripe.com/docs/payments/checkout/customization">Customize Checkout.</a><br>
The latter will also effect your Stripe Payment Link style.<br><br>


![stripe](https://user-images.githubusercontent.com/38325801/203768791-96d5e493-4d2e-4e51-8d1c-f8e85f06b174.png)<br><br>

Stripe Payment Element (no redirect)<p>
![stripe1](https://user-images.githubusercontent.com/38325801/203801299-235f29d6-ebf3-4a51-a0a2-388c2a8a0b85.png)<br><br>

Stripe Checkout (redirect to checkout.stripe.com)<p>
![stripe2](https://user-images.githubusercontent.com/38325801/203768809-f8684edc-85aa-45c3-8278-a679aba00834.png)<br><br>

Stripe Payment Link (redirect to checkout.stripe.com)<p>
![stripe3](https://user-images.githubusercontent.com/38325801/203768817-2f11ed52-bbf3-4ebe-a8c6-cb5df9b75439.png)<br><br>
