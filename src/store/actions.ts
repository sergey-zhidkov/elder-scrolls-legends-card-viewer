import { Action, AnyAction, Dispatch } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { CardState } from "./reducers"
import { FetchClient, CardListInfoResponse } from "../utils/FetchClient"

interface PayloadAction<T> extends Action {
    type: string
    payload: T
}

export const actionTypes = {
    getCards: "esl_getCards",
    updateGetCardsFetchState: "esl_updateGetCardsFetchState",
}

export interface GetCards extends PayloadAction<CardListInfoResponse> {}

// export type AppDispatch = typeof store.dispatch
export type ThunkPromiseAction = ThunkAction<Promise<void>, CardState, undefined, Action>
export type ThunkVoidAction = ThunkAction<void, CardState, undefined, Action>
export type ThunkDispatchApp = ThunkDispatch<{}, {}, AnyAction>

export const actions = {
    getCards(): ThunkPromiseAction {
        return async (dispatch: Dispatch): Promise<void> => {
            try {
                // dispatch(actions.updateGetCardsFetchState())
                // const issue = await getIssue(org, repo, number)
                // dispatch(getIssueSuccess(issue))
                const client = new FetchClient()
                const result = await client.fetchCards()
                dispatch<GetCards>({
                    type: actionTypes.getCards,
                    payload: result,
                })
            } catch (err) {
                // TODO: error handling
                // dispatch(getIssueFailure(err.toString()))
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
}
