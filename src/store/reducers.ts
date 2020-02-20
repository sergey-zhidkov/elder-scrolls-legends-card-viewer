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
        cardListInfo: CardListInfoResponse | null
        fetchState: FetchState
    }>
}

function cardListInfo(
    state: CardState["cardListInfo"] = {
        cardListInfo: null,
        fetchState: FetchState.Success,
    },
    action: GetCards
): CardState["cardListInfo"] {
    if (action.type === actionTypes.getCards) {
        return {
            cardListInfo: action.payload,
            fetchState: FetchState.Success,
        }
    } else if (action.type === actionTypes.updateGetCardsFetchState) {
        return {
            cardListInfo: state.cardListInfo,
            fetchState: FetchState.Loading,
        }
    }
    return state
}

export const cardReducers = combineReducers({ cardListInfo })
