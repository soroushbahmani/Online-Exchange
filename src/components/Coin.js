import React from 'react'
//css
import style from './coin.module.css'
const Coin = ({name,image,symple,price,marketCap,priceChange}) => {
  return (
    <div className={style.continer}>
        <img className={style.image} src={image} alt={'icon'+name}/>
        <span className={style.name}>{name}</span>
        <span className={style.symple}>{symple.toUpperCase()}</span>
        <span className={style.currentPrice}> $ {price.toLocaleString()}</span>
        <span className={priceChange > 0 ? style.greenPrice : style.redPrice}>{priceChange.toFixed(2)}</span>
        <span className={style.marketCap} > ${marketCap.toLocaleString()}</span>
    </div>
  )
}

export default Coin