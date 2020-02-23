import React, { useState, useEffect, UIEventHandler } from "react"
import styles from "./Home.module.scss"
import { RouteComponentProps } from "react-router-dom"
import { useDispatch } from "react-redux"
import { actions } from "../../store/actions"
import { buildClassName } from "../../utils/utils"
import { CardGrid } from "../../shared/cards/CardGrid"
import { ScrollContainer } from "../../shared/scrollContainer/ScrollContainer"

interface HomeProps extends RouteComponentProps {
    className?: string
}

export function Home({ className }: HomeProps): JSX.Element {
    const dispatch = useDispatch()

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
