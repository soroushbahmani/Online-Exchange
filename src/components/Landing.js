import React, { useEffect, useState } from 'react'
import { getCoin } from '../services/api'

const Landing = () => {

    const [coins, setCoin] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await getCoin();
            setCoin(data)
        }
        fetchApi()
    }, [])



    return (
        <>
            <input type='text' placeholder='search' />
            <div>
                {
                    coins.map(item =>  <p key={item.id}>{item.name}</p>)
                }
            </div>
        </>
    )
}

export default Landing