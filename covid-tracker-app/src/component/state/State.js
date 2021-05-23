import React, {useEffect, useState} from 'react'
import ListItem from '../../helper/ListItem';
import { stateWise } from '../../fetch//api'

function State() {

    const [state, setstate] = useState({})

    useEffect( () => {
        fetch(stateWise)
        .then((response) => {
            if(response.ok){
                return response.json();
            }
            throw response;
        })
        .then( (data) => {
            setstate(data);
        })
        .catch (error => {
            console.error(error)
        })
        
    }, [])
    return (
        <div>
                <ListItem data={state} />
        </div>
    )
}

export default State
