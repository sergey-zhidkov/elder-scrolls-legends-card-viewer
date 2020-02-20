import { actionTypes, GetCards } from "./actions"
import { combineReducers } from "redux"

export enum FetchState {
    Loading,
    Success,
    Error,
}

export interface CardState {
    cardListInfo: Readonly<{
        cards: string[]
        fetchState: FetchState
    }>
}

function cardListInfo(
    state: CardState["cardListInfo"] = {
        cards: [],
        fetchState: FetchState.Success,
    },
    action: GetCards
): CardState["cardListInfo"] {
    if (action.type === actionTypes.getCards) {
        return {
            cards: action.payload,
            fetchState: FetchState.Success,
        }
    } else if (action.type === actionTypes.updateGetCardsFetchState) {
        return {
            cards: state.cards,
            fetchState: FetchState.Loading,
        }
    }
    return state
}

export const cardReducers = combineReducers({ cardListInfo })
