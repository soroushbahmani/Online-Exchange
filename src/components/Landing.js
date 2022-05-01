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
    const [perr, setPer] = useState(5);
    const [page, setPage] = useState(1);



    useEffect(() => {
        const fetchApi = async () => {
            const data = await getCoin(perr, page);
            setCoin(data)
            // console.log(data.length);
        }
        fetchApi()
    }, [perr, page])

    const searchHandler = event => {
        setSearch(event.target.value)
    }
    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    const pageinationClick = (event) => {
        setPer(event.target.value)
    }
    const pageHandler = event => {
        setPage(event.target.value)
    }
    return (
        <>
            <div className={style.topInputs}>
                <div>
                    <span>row</span>
                    <select className={style.select} value={perr} onChange={pageinationClick}>
                        <option value='1' >1</option>
                        <option value='5' >5</option>
                        <option value='10'>10</option>
                        <option value='25' >25</option>
                        <option value='50'>50</option>
                    </select>
                </div>
                <div>
                    <span>page</span>
                    <input className={style.input0} type='number' placeholder='pageination' min={1} onChange={pageHandler} value={page} />
                </div>
            </div>
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
                    <Loader type={'loading'} />
            }
            {
                search.length ?
                    <Loader type={'not'} /> :
                    ''
            }

        </>
    )
}

export default Landing