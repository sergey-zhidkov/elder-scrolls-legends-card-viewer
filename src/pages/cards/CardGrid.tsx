import React from "react"
import styles from "./CardGrid.module.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { CardInfo } from "../../utils/FetchClient"
import { Card } from "./components/Card"
import { getClassName } from "../../utils/utils"
import { FetchState } from "../../store/reducers"
import { PropagateLoader } from "react-spinners"

interface CardGridProps {
    className?: string
}

export const CardGrid: React.FC<CardGridProps> = ({ className }): JSX.Element => {
    const { cardListInfoResponse, fetchState } = useSelector((state: RootState) => state.cardState.cardListInfo)

    console.log(cardListInfoResponse)

    const renderCardList = (cardList: CardInfo[] | undefined): JSX.Element => {
        return <div className={`${styles.cardList} card-list`}> {(cardList || []).map(renderCard)}</div>
    }

    const renderCard = (card: CardInfo): JSX.Element => <Card card={card} />

    const renderLoadingSpinner = (): JSX.Element | null => {
        if (fetchState !== FetchState.Loading) return null
        return (
            <div className={styles.loader}>
                <PropagateLoader size={30} loading={true} color="#0078d4" />
            </div>
        )
    }

    return (
        <div className={getClassName("CardGrid", styles.CardGrid, className)}>
            {renderCardList(cardListInfoResponse?.cards)}
            {renderLoadingSpinner()}
        </div>
    )
}
