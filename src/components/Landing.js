import React, { useEffect, useState } from 'react'
//api
import { getCoin } from '../services/api'
import Loader from './Loader';
//loading

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
                    coins.length?
                    coins.map(item =>  <p key={item.id}>{item.name}</p>):
                    <Loader/>
                }
            </div>
        </>
    )
}

export default Landing