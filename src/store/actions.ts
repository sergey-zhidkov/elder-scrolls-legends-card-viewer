import { Action, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { FetchClient, EslSearchResponse, CardInfo } from "../utils/FetchClient"
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
    setCards: "esl_setCards",
}

export interface GetSearchResponseAction extends PayloadAction<EslSearchResponse> {}
export interface SetGetCardsFailureAction extends PayloadAction<string> {}
export interface AddCardsAction extends PayloadAction<CardInfo[]> {}
export interface SetCardsAction extends PayloadAction<CardInfo[]> {}

export type ThunkPromiseAction = ThunkAction<Promise<void>, RootState, undefined, Action>
export type ThunkVoidAction = ThunkAction<void, RootState, undefined, Action>
// export type ThunkDispatchApp = ThunkDispatch<{}, {}, AnyAction>

export const actions = {
    getCards(): ThunkPromiseAction {
        return async (dispatch: Dispatch<any>, getState: () => RootState): Promise<void> => {
            try {
                const cardState = getState().cardState
                const cardsCount = cardState.cards?.length || 0
                const totalCount = cardState.cardListInfo.searchResponse?._totalCount ?? 0
                if (cardsCount >= totalCount) {
                    return
                }

                dispatch(this.updateGetCardsFetchState())
                const nextUrl = cardState.cardListInfo.searchResponse?._links?.next
                const client = new FetchClient(nextUrl)
                const result = await client.fetchCards()
                const cards = result.cards
                // don't save card list twice
                result.cards = []
                dispatch<AddCardsAction>({
                    type: actionTypes.addCards,
                    payload: cards,
                })
                dispatch<GetSearchResponseAction>({
                    type: actionTypes.getCards,
                    payload: result,
                })
            } catch (err) {
                dispatch(this.failureGetCardsFetchState(err.toString()))
            }
        }
    },
    searchCardsByName(name: string): ThunkPromiseAction {
        return async (dispatch: Dispatch<any>, getState: () => RootState): Promise<void> => {
            try {
                // clean
                dispatch<SetCardsAction>({
                    type: actionTypes.addCards,
                    payload: [],
                })
                dispatch(this.updateGetCardsFetchState())
                const client = new FetchClient()
                const result = await client.searchByName(name)
                console.log(result, "<< Search")
                const cards = result.cards
                result.cards = []
                dispatch<SetCardsAction>({
                    type: actionTypes.addCards,
                    payload: cards,
                })
                dispatch<GetSearchResponseAction>({
                    type: actionTypes.getCards,
                    payload: result,
                })
            } catch (err) {
                dispatch(this.failureGetCardsFetchState(err.toString()))
            }
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
