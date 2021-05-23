import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function ListItem({ data }) {
    if(typeof(data) == 'object'){
        data = Object.keys(data)
    }
    return (
        <>
            {data.map( (ele) => (
                <Link to={`/${ele}`}>
                    <div className="list-item">
                        <h2 className='title'>
                            {ele}
                        </h2>
                        <div className="list-item-info">
                            <span>Active cases</span>
                            <span>Recovered cases</span>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default ListItem
