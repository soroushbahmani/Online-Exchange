import axios from "axios"

const getCoin = async (per , page) =>{
    const BASE_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${per}&page=${page}&sparkline=false`
    const response = await axios.get(BASE_URL);
    return response.data;
}
export {getCoin};