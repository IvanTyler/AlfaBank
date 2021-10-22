import uuid from 'react-uuid'
import { initState } from "../initState"
import {
    GET_NASA_DATA,
    DELETE_NASA_POST,
} from "../types/nasaTypes"

export const nasaReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_NASA_DATA:
            return {
                ...state, nasaData: action.payload.map(el => {
                    return {
                        ...el,
                        id: uuid(),
                        like: false,
                    }
                })
            }
        case DELETE_NASA_POST:
            console.log(action.id)
            return {
                ...state, nasaData: state.nasaData.filter(el => {
                    return el.id !== action.id
                })
            }
        default:
            return state
    }
}