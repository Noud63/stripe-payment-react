import React from 'react'
import './completion.css'
import { useNavigate } from 'react-router-dom'

const Completion = () => {

    const navigate = useNavigate()

    const goBack = () => {
    navigate('/')
    }

    return (
        <div className="completion">
            <div>Thank you for subscribing!</div>
            <button className="home_btn" onClick={goBack}>Home</button>
        </div>
       
    )
}

export default Completion
