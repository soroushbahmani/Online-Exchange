import React , {useEffect , useState} from 'react'
import { getCoin } from '../services/api'

const Landing =()=> {

    useEffect(()=>{
        const fetchApi = async () => {
            const data = await getCoin();
            console.log(data);
        }
        fetchApi()
    },[])

  return (
    <div>Landing</div>
  )
}

export default Landing