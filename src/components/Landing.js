import React, { useEffect, useState } from 'react'
//api
import { getCoin } from '../services/api'
import Coin from './Coin';
//loading
import Loader from './Loader';
//components

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
                    coins.length ?
                        coins.map(item => <Coin
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            symple={item.symbol}
                            price={item.current_price}
                            marketCap={item.market_cap}
                            priceChange={item.price_change_percentage_24h}
                        />) :
                        <Loader />
                }
            </div>
        </>
    )
}

export default Landing