import React from 'react'
import './loader.css'
import loader from '../images/loading.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={loader} alt="loader" style={{ width: '50px' }} />
        </div>
    )
}

export default Loader
