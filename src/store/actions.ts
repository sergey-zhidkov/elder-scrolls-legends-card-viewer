import { Action, AnyAction, Dispatch } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { CardState } from "./reducers"
import { FetchClient, CardListInfoResponse, CardInfo } from "../utils/FetchClient"

interface PayloadAction<T> extends Action {
    type: string
    payload: T
}

export const actionTypes = {
    getCards: "esl_getCards",
    updateGetCardsFetchState: "esl_updateGetCardsFetchState",
    failureGetCardsFetchState: "esl_failureGetCardsFetchState",
    addCards: "esl_addCards",
}

export interface GetCardsAction extends PayloadAction<CardListInfoResponse> {}
export interface SetGetCardsFailureAction extends PayloadAction<string> {}
export interface AddCardsAction extends PayloadAction<CardInfo[]> {}

// export type AppDispatch = typeof store.dispatch
export type ThunkPromiseAction = ThunkAction<Promise<void>, CardState, undefined, Action>
export type ThunkVoidAction = ThunkAction<void, CardState, undefined, Action>
export type ThunkDispatchApp = ThunkDispatch<{}, {}, AnyAction>

export const actions = {
    getCards(): ThunkPromiseAction {
        return async (dispatch: Dispatch<any>): Promise<void> => {
            try {
                dispatch(this.updateGetCardsFetchState())
                const client = new FetchClient()
                const result = await client.fetchCards()
                const cards = result.cards
                result.cards = []
                dispatch<AddCardsAction>({
                    type: actionTypes.addCards,
                    payload: cards,
                })
                dispatch<GetCardsAction>({
                    type: actionTypes.getCards,
                    payload: result,
                })
            } catch (err) {
                dispatch(this.failureGetCardsFetchState(err.toString()))
            }
        }
    },
    updateGetCardsFetchState(): ThunkVoidAction {
        return (dispatch: ThunkDispatchApp): void => {
            dispatch({
                type: actionTypes.updateGetCardsFetchState,
            })
        }
    },
    failureGetCardsFetchState(error: string): ThunkVoidAction {
        return (dispatch: ThunkDispatchApp): void => {
            dispatch<SetGetCardsFailureAction>({
                type: actionTypes.failureGetCardsFetchState,
                payload: error,
            })
        }
    },
}
