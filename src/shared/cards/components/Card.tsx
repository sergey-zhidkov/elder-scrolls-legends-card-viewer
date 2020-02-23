import React from "react"
import styles from "./Card.module.scss"
import { buildClassName } from "../../../utils/utils"
import { CardInfo } from "../../../utils/FetchClient"

interface CardProps {
    className?: string
    card: CardInfo
}

export const Card: React.FC<CardProps> = ({ className, card }): JSX.Element => {
    const renderProperty = (label: string, property?: string): JSX.Element | null => {
        if (!property) return null
        return (
            <div className={styles.property}>
                <span className={styles.title}>{label}</span>
                <span>{property}</span>
            </div>
        )
    }

    return (
        <div className={buildClassName("Card", styles.Card, className)}>
            <div className={buildClassName(styles.name, card.rarity)}>{card.name}</div>
            <img className={styles.image} src={card.imageUrl} alt={card.name} />
            <div className={styles.description}>
                {renderProperty("Text", card.text)}
                {renderProperty("Set", card.set?.name)}
                {renderProperty("Type", card.type)}
            </div>
        </div>
    )
}
