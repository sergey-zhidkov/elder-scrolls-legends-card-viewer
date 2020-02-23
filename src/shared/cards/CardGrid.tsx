import React, { UIEventHandler } from "react"
import styles from "./CardGrid.module.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { CardInfo } from "../../utils/FetchClient"
import { Card } from "./components/Card"
import { buildClassName } from "../../utils/utils"
import { FetchState } from "../../store/reducers"
import { Loader } from "./components/Loader"

interface CardGridProps {
    className?: string
    onScroll?: UIEventHandler
}

export const CardGrid: React.FC<CardGridProps> = ({ className }): JSX.Element => {
    const { cardListInfoResponse, fetchState } = useSelector((state: RootState) => state.cardState.cardListInfo)

    console.log(cardListInfoResponse)

    const renderCardList = (cardList: CardInfo[] | undefined): JSX.Element => {
        return <div className={`${styles.cardList} card-list`}> {(cardList || []).map(renderCard)}</div>
    }

    const renderCard = (card: CardInfo): JSX.Element => <Card card={card} />

    return (
        <div className={buildClassName("CardGrid", styles.CardGrid, className)}>
            {renderCardList(cardListInfoResponse?.cards)}
            <Loader loading={fetchState === FetchState.Loading} />
        </div>
    )
}
