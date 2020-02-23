import React, { useState, useEffect, UIEventHandler } from "react"
import styles from "./Home.module.scss"
import { RouteComponentProps } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../store/actions"
import { buildClassName } from "../../utils/utils"
import { CardGrid } from "../../shared/cards/CardGrid"
import { ScrollContainer } from "../../shared/scrollContainer/ScrollContainer"
import { RootState } from "../../store/store"

interface HomeProps extends RouteComponentProps {
    className?: string
}

export function Home({ className }: HomeProps): JSX.Element {
    const dispatch = useDispatch()

    const { cardListInfoResponse, fetchState } = useSelector((state: RootState) => state.cardState.cardListInfo)

    useEffect(() => {
        dispatch(actions.getCards())
    }, [])

    const handleScrollBottom = (): void => {
        console.log("yes")
    }

    return (
        <div className={buildClassName("Home", styles.Home, className)}>
            <ScrollContainer onScrollBottom={handleScrollBottom}>
                <CardGrid />
            </ScrollContainer>
        </div>
    )
}
