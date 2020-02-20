import React from "react"
import styles from "./CardGrid.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../store/actions"
import { RootState } from "../../store/store"

interface CardGridProps {
    className?: string
}

export const CardGrid: React.FC<CardGridProps> = ({ className }): JSX.Element => {
    const dispatch = useDispatch()
    const { cards, fetchState } = useSelector((state: RootState) => state.cardState.cardListInfo)

    React.useEffect(() => {
        if (!cards?.length) {
            dispatch(actions.getCards())
        }
    }, [])

    return (
        // TODO: get classname util function
        <div className={`CardGrid ${styles.CardGrid} ${className ?? ""}`}>Cards grid</div>
    )
}
