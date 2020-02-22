import { actionTypes, GetCardsAction, SetGetCardsFailureAction } from "./actions"
import { combineReducers } from "redux"
import { CardListInfoResponse } from "../utils/FetchClient"

export enum FetchState {
    Loading,
    Success,
    Error,
}

export interface CardState {
    cardListInfo: Readonly<{
        cardListInfoResponse: CardListInfoResponse | null
        fetchState: FetchState
        error: string
    }>
}

function cardListInfo(
    state: CardState["cardListInfo"] = {
        cardListInfoResponse: null,
        fetchState: FetchState.Success,
        error: "",
    },
    action: GetCardsAction | SetGetCardsFailureAction
): CardState["cardListInfo"] {
    if (action.type === actionTypes.getCards) {
        return {
            cardListInfoResponse: action.payload as CardListInfoResponse,
            fetchState: FetchState.Success,
            error: state.error,
        }
    } else if (action.type === actionTypes.updateGetCardsFetchState) {
        return {
            cardListInfoResponse: state.cardListInfoResponse,
            fetchState: FetchState.Loading,
            error: state.error,
        }
    } else if (action.type === actionTypes.failureGetCardsFetchState) {
        return {
            cardListInfoResponse: state.cardListInfoResponse,
            fetchState: FetchState.Error,
            error: action.payload as string,
        }
    }

    return state
}

export const cardReducers = combineReducers({ cardListInfo })
