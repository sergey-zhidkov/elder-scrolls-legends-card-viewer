import {
    actionTypes,
    GetSearchResponseAction,
    SetGetCardsFailureAction,
    AddCardsAction,
    SetCardsAction,
} from "./actions"
import { combineReducers } from "redux"
import { EslSearchResponse, CardInfo } from "../utils/FetchClient"

export enum FetchState {
    Loading,
    Success,
    Error,
}

export interface CardState {
    cardListInfo: Readonly<{
        searchResponse: EslSearchResponse | null
        fetchState: FetchState
        error: string
    }>
    cards: Readonly<CardInfo[]>
}

function cardListInfo(
    state: CardState["cardListInfo"] = {
        searchResponse: null,
        fetchState: FetchState.Success,
        error: "",
    },
    action: GetSearchResponseAction | SetGetCardsFailureAction
): CardState["cardListInfo"] {
    if (action.type === actionTypes.getCards) {
        return {
            searchResponse: action.payload as EslSearchResponse,
            fetchState: FetchState.Success,
            error: state.error,
        }
    } else if (action.type === actionTypes.updateGetCardsFetchState) {
        return {
            searchResponse: state.searchResponse,
            fetchState: FetchState.Loading,
            error: state.error,
        }
    } else if (action.type === actionTypes.failureGetCardsFetchState) {
        return {
            searchResponse: state.searchResponse,
            fetchState: FetchState.Error,
            error: action.payload as string,
        }
    } else if (action.type === actionTypes.resetSearchState) {
        return {
            searchResponse: null,
            fetchState: FetchState.Success,
            error: "",
        }
    }

    return state
}

function cards(state: CardInfo[] = [], action: AddCardsAction | SetCardsAction): CardInfo[] {
    if (action.type === actionTypes.addCards) {
        return [...state, ...action.payload]
    } else if (action.type === actionTypes.setCards) {
        return [...action.payload]
    }

    return state
}

export const cardReducers = combineReducers({ cardListInfo, cards })
