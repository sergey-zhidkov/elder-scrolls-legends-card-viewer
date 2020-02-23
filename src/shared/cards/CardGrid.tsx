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
    const { fetchState } = useSelector((state: RootState) => state.cardState.cardListInfo)
    const cards = useSelector((state: RootState) => state.cardState.cards)

    const renderCardList = (cardList: CardInfo[]): JSX.Element => {
        return <div className={`${styles.cardList} card-list`}> {(cardList || []).map(renderCard)}</div>
    }

    const renderCard = (card: CardInfo): JSX.Element => <Card key={card.id} card={card} />

    return (
        <div className={buildClassName("CardGrid", styles.CardGrid, className)}>
            {renderCardList(cards)}
            <Loader loading={fetchState === FetchState.Loading} />
            {cards.length === 0 && fetchState !== FetchState.Loading && (
                <div className={styles.noResults}>No results</div>
            )}
            {fetchState === FetchState.Error && <div className={styles.error}>Error</div>}
        </div>
    )
}
