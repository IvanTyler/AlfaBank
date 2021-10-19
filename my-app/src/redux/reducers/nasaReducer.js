import { initState } from "../initState"
import { GET_NASA_DATA } from "../types/nasaTypes"

export const nasaReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_NASA_DATA:
            return { ...state, nasaData: action.payload }
        default:
            return state
    }
}