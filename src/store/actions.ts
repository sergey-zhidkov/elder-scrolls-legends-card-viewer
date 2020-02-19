import { Dispatch } from "redux"

interface Action<T> {
    type: string
    payload: T
}

export const actionTypes = {
    getCards: "esl_getCards",
    updateGetCardsFetchState: "esl_updateGetCardsFetchState",
}

export interface GetCards extends Action<any[]> {}

export const actions = {
    getCards() {
        return async (dispatch: Dispatch): Promise<void> => {
            dispatch<GetCards>({
                type: actionTypes.getCards,
                payload: [],
            })
        }
    },
    updateGetCardsFetchState() {
        return (dispatch: Dispatch): void => {
            dispatch({
                type: actionTypes.updateGetCardsFetchState,
            })
        }
    },
}
