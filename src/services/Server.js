import axios from "axios"
import ApiConfig from '../config/Api'

export const getProducts = function (config) {
    return axios.get(ApiConfig.BASE_URL_API + "/get-products", config)
}