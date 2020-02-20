import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { cardReducers } from "./reducers"

export const rootReducer = combineReducers({
    cardState: cardReducers,
})

// export interface RootState {
//     readonly cardState: CardState
// }

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))
