import React from "react"
import styles from "./Card.module.scss"
import { buildClassName } from "../../../utils/utils"
import { CardInfo } from "../../../utils/FetchClient"

interface CardProps {
    className?: string
    card: CardInfo
}

export const Card: React.FC<CardProps> = ({ className, card }): JSX.Element => {
    console.log(card)

    return (
        <div className={buildClassName("Card", styles.Card, className)}>
            <div>
                {/* TODO: alt text */}
                <img className={styles.image} src={card.imageUrl} alt="TODO" />
            </div>
            <div>
                <div>Name: {card.name}</div>
                <div>Text: {card.text}</div>
                <div>Set: {card.set?.name}</div>
                <div>Type: {card.type}</div>
            </div>
        </div>
    )
}
