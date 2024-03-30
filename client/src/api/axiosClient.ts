import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `${process.env.SERVER_URL}`
})

export default instance;