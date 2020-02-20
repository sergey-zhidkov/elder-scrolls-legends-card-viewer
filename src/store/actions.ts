import { Action, AnyAction } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { CardState } from "./reducers"

interface PayloadAction<T> extends Action {
    type: string
    payload: T
}

export const actionTypes = {
    getCards: "esl_getCards",
    updateGetCardsFetchState: "esl_updateGetCardsFetchState",
}

export interface GetCards extends PayloadAction<string[]> {}

// export type AppDispatch = typeof store.dispatch
export type ThunkPromiseAction = ThunkAction<Promise<void>, CardState, undefined, Action>
export type ThunkVoidAction = ThunkAction<void, CardState, undefined, Action>
export type ThunkDispatchApp = ThunkDispatch<{}, {}, AnyAction>

export const actions = {
    getCards(): ThunkPromiseAction {
        return async (dispatch: ThunkDispatchApp): Promise<void> => {
            dispatch<GetCards>({
                type: actionTypes.getCards,
                payload: [],
            })
        }
    },
    updateGetCardsFetchState(): ThunkVoidAction {
        return (dispatch: ThunkDispatchApp): void => {
            dispatch({
                type: actionTypes.updateGetCardsFetchState,
            })
        }
    },
}
