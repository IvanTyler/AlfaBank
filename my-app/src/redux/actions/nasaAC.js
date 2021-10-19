import { GET_NASA_DATA } from "../types/nasaTypes";
import axios from 'axios'

export const setNasaData = (NasaDataList) => {
    return {
        type: GET_NASA_DATA,
        payload: NasaDataList,
    }
}

export const getNasaData = () => async (dispatch) => {
    const nasaData = await axios.get('https://api.nasa.gov/planetary/apod?api_key=SewEbWvCMxUVt9pgAeNL3RWiAWgMDPbOaMLVLq8H&count=15')
    dispatch(setNasaData(nasaData.data))
}