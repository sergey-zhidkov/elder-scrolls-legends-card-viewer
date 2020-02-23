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
    const { fetchState, error } = useSelector((state: RootState) => state.cardState.cardListInfo)
    const cards = useSelector((state: RootState) => state.cardState.cards)

    const renderCardList = (cardList: CardInfo[]): JSX.Element => (
        <div className={buildClassName(styles.cardList, "card-list")}>{(cardList || []).map(renderSingleCard)}</div>
    )

    const renderSingleCard = (card: CardInfo): JSX.Element => <Card key={card.id} card={card} />

    const renderNoResult = (): JSX.Element | null => {
        if (cards?.length === 0 && fetchState === FetchState.Success) {
            return <div className={styles.noResults}>No results</div>
        }
        return null
    }

    const renderError = (): JSX.Element | null => {
        if (fetchState === FetchState.Error) {
            return <div className={styles.error}>{error}</div>
        }
        return null
    }

    return (
        <div className={buildClassName("CardGrid", styles.CardGrid, className)}>
            {renderCardList(cards)}
            {renderNoResult()}
            {renderError()}
            <Loader loading={fetchState === FetchState.Loading} />
        </div>
    )
}
