import React from "react"
import styles from "./CardGrid.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../store/actions"
import { RootState } from "../../store/store"
import { RouteComponentProps } from "react-router-dom"
import { CardInfo } from "../../utils/FetchClient"
import { Card } from "./components/Card"
import { getClassName } from "../../utils/utils"

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

    const renderCardList = (cardList: CardInfo[] | undefined): JSX.Element => {
        return <div className={`${styles.cardList} card-list`}> {(cardList || []).map(renderCard)}</div>
    }

    const renderCard = (card: CardInfo): JSX.Element => <Card card={card} />

    return (
        // TODO: get classname util function
        <div className={getClassName("CardGrid", styles.CardGrid, className)}>
            {renderCardList(cardListInfo?.cards)}
        </div>
    )
}
