import React, { useEffect } from "react"
import styles from "./Home.module.scss"
import { RouteComponentProps } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../store/actions"
import { buildClassName } from "../../utils/utils"
import { CardGrid } from "../../shared/cards/CardGrid"
import { ScrollContainer } from "../../shared/scrollContainer/ScrollContainer"
import { RootState } from "../../store/store"
import { FetchState } from "../../store/reducers"

interface HomeProps extends RouteComponentProps {
    className?: string
}

export function Home({ className }: HomeProps): JSX.Element {
    const dispatch = useDispatch()

    const cards = useSelector((state: RootState) => state.cardState.cards)
    const { fetchState } = useSelector((state: RootState) => state.cardState.cardListInfo)

    useEffect(() => {
        if (!cards?.length) {
            dispatch(actions.getCards())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cards])

    const handleScrollBottom = (): void => {
        console.log("yes")
        if (fetchState !== FetchState.Loading) {
            console.log("load >>>")
            dispatch(actions.getCards())
        }
    }

    return (
        <div className={buildClassName("Home", styles.Home, className)}>
            <ScrollContainer onScrollBottom={handleScrollBottom}>
                <CardGrid />
            </ScrollContainer>
        </div>
    )
}
