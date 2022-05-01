import React, { useEffect, useState } from 'react'
//api
import { getCoin } from '../services/api'
import Coin from './Coin';
//loading
import Loader from './Loader';
//components

const Landing = () => {

    const [coins, setCoin] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchApi = async () => {
            const data = await getCoin();
            setCoin(data)
        }
        fetchApi()
    }, [])

    const searchHandler = event => {
        setSearch(event.target.value)
    }
    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <input type='text' placeholder='search' value={search} onChange={searchHandler} />
            <div>

                {
                    coins.length ?
                    searchCoins.map(item => <Coin
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