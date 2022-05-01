import React from 'react'
//gif
import spinner from '../gif/loader.gif'

const Loader = ({ type }) => {
    return (
        <div>
            {
                type == 'loading' ?
                <div>
                    <img src={spinner} alt='loading' />
                    <h1>loading...</h1>
                </div>
                :
                <div>
                    <h2>
                        Not Found Coins
                    </h2>
                </div>
            }

        </div>
    )
}

export default Loader