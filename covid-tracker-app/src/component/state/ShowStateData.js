import React, {useEffect , useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import ListItem from '../../helper/ListItem';
import { stateWise } from '../../fetch//api'

export default function ShowStateData() {

    let { id }= useParams()

    const [district, setdistrict] = useState({})

    useEffect( () => {
        fetch(stateWise)
        .then((response) => {
            if(response.ok){
                return response.json();
            }
            throw response;
        })
        .then( (data) => {
            console.log(data[`${id}`])
           setdistrict(data[`${id}`].districtData);
        })
        .catch (error => {
            console.error(error)
        })

        
        
    }, [id])

    return (
        <>
            {Object.keys(district).map( (ele) => (
                <Link to={`/${id}/${ele}`}>
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
