import axios from 'axios'
import api from '../api/axiosClient'

// export const getBooks = async(url: string)=>{
//     const fetcher
// }

export const fetcher = (url: string) => axios.get(url).then(res =>res.data)
