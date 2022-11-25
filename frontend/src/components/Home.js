import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
import axios from 'axios'
import cart from './Cart'
import id from './Cart'

const Home = () => {

    const navigate = useNavigate()

    //Stripe Payment Element, create payment intent
    const checkItout1 = () => {
        navigate('/payment')
    }

    // Stripe Checkout, create checkout session
    const checkItout2 = async () => {
        try {
            const res = await axios.post('/stripeCheckout', { cart, id: id })
            const url = res.data.url
            if (url) {
                window.location.href = url;
            }
            console.log(url)
        } catch (error) {
            console.log(error)
        }
    }
    
    // Stripe Payment Link, no server needed
    const checkItout3 = () => {
        window.location.href = 'https://buy.stripe.com/test_7sI4jefqu84l0Te6op'
    }
     

    return (
        <div className="container">
            <div className="stripe_header">
                <h1>STRIPE.JS</h1>
                <div className="titles">
                    <span>Payment Element</span>
                    <span>Checkout</span>
                    <span>Payment Links</span>
                </div>
                
            </div>
           
            <div className="btnBox">
                <button className="checkout_btn" onClick={checkItout1}>Checkout1</button>
                <button className="checkout_btn" onClick={checkItout2}>Checkout2</button>
                <button className="checkout_btn" onClick={checkItout3}>Checkout3</button>
            </div>
        </div>
    )
}

export default Home
