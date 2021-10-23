import uuid from 'react-uuid'
import { initState } from "../initState"
import {
    GET_NASA_DATA,
    DELETE_NASA_POST,
    NASA_POST_LIKE,
    NASA_POST_FILTER,
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
            return {
                ...state, nasaData: state.nasaData.filter(el => {
                    return el.id !== action.id
                })
            }
        case NASA_POST_LIKE:
            return {
                ...state, nasaData: state.nasaData.map(el => {
                    if (el.id === action.like) {
                        return {
                            ...el,
                            like: !el.like
                        }
                    }
                    return el
                })
            }
        case NASA_POST_FILTER:
            return {
                ...state
            }
        default:
            return state
    }
}