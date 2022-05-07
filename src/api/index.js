import axios from "axios";
import { API_URL_ROUTE } from "../utils/consts";

const $host = axios.create({
    baseURL: API_URL_ROUTE
})

const $authHost = axios.create({
    baseURL: API_URL_ROUTE
})

// const authInterceptor = (config) => {...}

// $authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}