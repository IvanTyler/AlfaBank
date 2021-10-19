import { createStore, combineReducers, applyMiddleware } from 'redux'
import { nasaReducer } from "../reducers/nasaReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    nasaData: nasaReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
