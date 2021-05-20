import React from 'react'
import { useParams } from 'react-router'

function DistrictData() {

    let { dis,id } = useParams();
    console.log(dis,id)

    return (
        <div>
            <li>
                paschim vihar data
            </li>
        </div>
    )
}

export default DistrictData
