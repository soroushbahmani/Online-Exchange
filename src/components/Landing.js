import React, { useEffect, useState } from 'react'
//api
import { getCoin } from '../services/api'
import Coin from './Coin';
//loading
import Loader from './Loader';
//components
//css
import style from './landing.module.css'

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
            <input className={style.input1} type='text' placeholder='search' value={search} onChange={searchHandler} />

                {
                    coins.length ?
                        <div className={style.coinContainer}>
                            {
                                searchCoins.map(item => <Coin
                                    key={item.id}
                                    name={item.name}
                                    image={item.image}
                                    symple={item.symbol}
                                    price={item.current_price}
                                    marketCap={item.market_cap}
                                    priceChange={item.price_change_percentage_24h}
                                />)
                            }


                        </div> :
                        <Loader type={'loading'}/>
                }
                {
                    search.length ? 
                    <Loader type={'not'}/>:
                    ''
                }

        </>
    )
}

export default Landing