import { Action, AnyAction, Dispatch } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { FetchClient, CardListInfoResponse, CardInfo } from "../utils/FetchClient"
import { RootState } from "./store"

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

export type ThunkPromiseAction = ThunkAction<Promise<void>, RootState, undefined, Action>
export type ThunkVoidAction = ThunkAction<void, RootState, undefined, Action>
export type ThunkDispatchApp = ThunkDispatch<{}, {}, AnyAction>

export const actions = {
    getCards(): ThunkPromiseAction {
        return async (dispatch: Dispatch<any>, getState: () => RootState): Promise<void> => {
            try {
                const cardState = getState().cardState
                const nextUrl = cardState.cardListInfo?.cardListInfoResponse?._links?.next
                const prevUrl = cardState.cardListInfo?.cardListInfoResponse?._links?.prev
                if (prevUrl && !nextUrl) {
                    return
                }

                dispatch(this.updateGetCardsFetchState())
                const client = new FetchClient(nextUrl)
                const result = await client.fetchCards()
                const cards = result.cards
                // don't save card list twice
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
    searchCardsByName(name: string): ThunkPromiseAction {
        return async (dispatch: Dispatch<any>, getState: () => RootState): Promise<void> => {
            try {
                // const cardState = getState().cardState
                // const nextUrl = cardState.cardListInfo?.cardListInfoResponse?._links?.next
                // const prevUrl = cardState.cardListInfo?.cardListInfoResponse?._links?.prev
                // if (prevUrl && !nextUrl) {
                //     return
                // }

                dispatch(this.updateGetCardsFetchState())
                const client = new FetchClient(undefined)
                const result = await client.searchByName(name)
                console.log(result, "<< Search")
                // const cards = result.cards
                // don't save card list twice
                // result.cards = []
                // dispatch<AddCardsAction>({
                //     type: actionTypes.addCards,
                //     payload: cards,
                // })
                // dispatch<GetCardsAction>({
                //     type: actionTypes.getCards,
                //     payload: result,
                // })
            } catch (err) {
                dispatch(this.failureGetCardsFetchState(err.toString()))
            }
        }
    },
}
