import React from 'react'
import { Link, Route } from 'react-router-dom'

function State() {
    return (
        <div>
            
                <ul>
                <Link to="/chandigarh">
                    <li>chandigarh</li>
                </Link>
                <Link to="/delhi">
                    <li>delhi</li>
                </Link>
                <Link to="/mumbai">
                    <li>mumbai</li>
                </Link>
                <Link to="/banglore">
                    <li>banglore</li>
                </Link>
                </ul>
            
            
        </div>
    )
}

export default State
