import React from 'react'

const Coin = ({name,image,symple,price,marketCap,priceChange}) => {
  return (
    <div>
        <img src={image} alt={'icon'+name}/>
        <span>{name}</span>
        <span>{symple.toUpperCase()}</span>
        <span>{price.toLocaleString()}</span>
        <span>{priceChange}</span>
        <span>{marketCap.toLocaleString()}</span>
    </div>
  )
}

export default Coin