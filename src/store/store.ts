import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import { cardReducers, CardState } from "./reducers"

export const reducers = combineReducers({
    cardState: cardReducers,
})

export interface StoreState {
    readonly cardState: CardState
}

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
