import { config } from "../config";
import axios from "axios";

export function createTheater(resData) {
    return axios.post(`${config.api}/admin/theater/create`,resData,{
        headers : {
            Authorization : localStorage.getItem(`${config.storage_key}`)
        }
    })
}

export function ListTheaterData(resData) {
    return axios.post(`${config.api}/admin/theater/create`,{
        headers : {
            Authorization : localStorage.getItem(`${config.storage_key}`)
        }
    })
}