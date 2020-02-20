import React from "react"
import styles from "./CardGrid.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../store/actions"
import { RootState } from "../../store/store"
import { RouteComponentProps } from "react-router-dom"

interface CardGridProps extends RouteComponentProps {
    className?: string
}

export const CardGrid: React.FC<CardGridProps> = ({ className }): JSX.Element => {
    const dispatch = useDispatch()
    const { cardListInfo, fetchState } = useSelector((state: RootState) => state.cardState.cardListInfo)

    console.log(cardListInfo)
    React.useEffect(() => {
        if (!cardListInfo) {
            dispatch(actions.getCards())
        }
    }, [])

    return (
        // TODO: get classname util function
        <div className={`CardGrid ${styles.CardGrid} ${className ?? ""}`}>Cards grid</div>
    )
}
