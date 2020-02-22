import { actionTypes, GetCards } from "./actions"
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
    }>
}

function cardListInfo(
    state: CardState["cardListInfo"] = {
        cardListInfoResponse: null,
        fetchState: FetchState.Success,
    },
    action: GetCards
): CardState["cardListInfo"] {
    if (action.type === actionTypes.getCards) {
        return {
            cardListInfoResponse: action.payload,
            fetchState: FetchState.Success,
        }
    } else if (action.type === actionTypes.updateGetCardsFetchState) {
        return {
            cardListInfoResponse: state.cardListInfoResponse,
            fetchState: FetchState.Loading,
        }
    }
    return state
}

export const cardReducers = combineReducers({ cardListInfo })
