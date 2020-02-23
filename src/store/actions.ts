import { Action, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { FetchClient, EslSearchResponse, CardInfo } from "../utils/FetchClient"
import { RootState } from "./store"
import axios, { CancelTokenSource } from "axios"
import { CardState } from "./reducers"

interface PayloadAction<T> extends Action {
    type: string
    payload: T
}

export const actionTypes = {
    getCards: "esl_getCards",
    updateGetCardsFetchState: "esl_updateGetCardsFetchState",
    failureGetCardsFetchState: "esl_failureGetCardsFetchState",
    addCards: "esl_addCards",
    setCards: "esl_setCards",
    resetSearchState: "esl_resetSearchState",
    setCancelToken: "esl_setCancelToken",
}

export interface GetSearchResponseAction extends PayloadAction<EslSearchResponse> {}
export interface SetGetCardsFailureAction extends PayloadAction<string> {}
export interface AddCardsAction extends PayloadAction<CardInfo[]> {}
export interface SetCardsAction extends PayloadAction<CardInfo[]> {}
export interface SetCancelTokenAction extends PayloadAction<CancelTokenSource | null> {}

export type ThunkPromiseAction = ThunkAction<Promise<void>, RootState, undefined, Action>
export type ThunkVoidAction = ThunkAction<void, RootState, undefined, Action>

function hasMoreCards(cardState: CardState): boolean {
    const cardsCount = cardState.cards?.length || 0
    const totalCount = cardState.cardListInfo.searchResponse?._totalCount
    return totalCount === undefined || cardsCount < totalCount
}

export const actions = {
    getNextCards(namePattern?: string): ThunkPromiseAction {
        return async (dispatch: Dispatch<any>, getState: () => RootState): Promise<void> => {
            try {
                const cardState = getState().cardState
                if (!hasMoreCards(cardState)) {
                    return
                }

                dispatch(this.updateGetCardsFetchState())
                // const currentToken = cardState.cancelToken as CancelTokenSource
                // if (currentToken) {
                //     currentToken.cancel()
                // }
                const nextUrl = cardState.cardListInfo.searchResponse?._links?.next
                const client = new FetchClient(nextUrl)
                // dispatch<SetCancelTokenAction>({
                //     type: actionTypes.setCancelToken,
                //     payload: client.token,
                // })
                const result = await client.fetchCards(namePattern)
                const cards = result.cards
                // don't save card list twice
                result.cards = []
                // dispatch<SetCancelTokenAction>({
                //     type: actionTypes.setCancelToken,
                //     payload: client.token,
                // })
                dispatch<AddCardsAction>({
                    type: actionTypes.addCards,
                    payload: cards,
                })
                dispatch<GetSearchResponseAction>({
                    type: actionTypes.getCards,
                    payload: result,
                })
            } catch (err) {
                // if (axios.isCancel(err)) {
                //     console.debug(err)
                // } else {
                dispatch(this.failureGetCardsFetchState(err.toString()))
                // }
            }
        }
    },
    resetSearchState(): ThunkVoidAction {
        return (dispatch: Dispatch): void => {
            dispatch({
                type: actionTypes.resetSearchState,
            })
            dispatch<SetCardsAction>({
                type: actionTypes.setCards,
                payload: [],
            })
        }
    },
    updateGetCardsFetchState(): ThunkVoidAction {
        return (dispatch: Dispatch): void => {
            dispatch({
                type: actionTypes.updateGetCardsFetchState,
            })
        }
    },
    failureGetCardsFetchState(error: string): ThunkVoidAction {
        return (dispatch: Dispatch): void => {
            dispatch<SetGetCardsFailureAction>({
                type: actionTypes.failureGetCardsFetchState,
                payload: error,
            })
        }
    },
}
