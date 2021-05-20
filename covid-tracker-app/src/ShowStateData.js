import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch, useParams } from 'react-router-dom'

export default function ShowStateData() {
    let { id }= useParams()
    return (
        <div>
            {/* <h1>state : {id}</h1> */}
        
            <Link to={`/${id}/paschim vihar`}>
                <ul>
                    <li>
                        paschim vihar
                    </li>
                </ul>
            </Link>
            {/* <Switch>
                <Route path={`/${id}/:id`} />
            </Switch> */}
                
            
        </div>
    )
}
