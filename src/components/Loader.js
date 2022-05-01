import React from 'react'
//gif
import spinner from '../gif/loader.gif'

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt='loading'/>
            <h1>loading</h1>
        </div>
    )
}

export default Loader