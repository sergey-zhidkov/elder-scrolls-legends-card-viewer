import React, { useEffect, useState } from "react"
import styles from "./Home.module.scss"
// @ts-ignore
import SearchInput from "react-search-input"
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
    const [searchQuery, setSearchQuery] = useState("")

    const dispatch = useDispatch()

    const cards = useSelector((state: RootState) => state.cardState.cards)
    const { fetchState, cardListInfoResponse } = useSelector((state: RootState) => state.cardState.cardListInfo)

    useEffect(() => {
        if (!cards?.length) {
            dispatch(actions.getCards())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cards])

    const handleScrollBottom = (): void => {
        const cardsCount = cards?.length || 0
        const totalCount = cardListInfoResponse?._totalCount
        if (cardsCount === totalCount) {
            return
        }
        if (fetchState !== FetchState.Loading) {
            // dispatch(actions.getCards())
        }
    }

    const handleSearch = (): void => {
        if (searchQuery.trim()) {
            dispatch(actions.searchCardsByName(searchQuery.trim()))
        }
    }

    return (
        <div className={buildClassName("Home", styles.Home, className)}>
            <ScrollContainer onScrollBottom={handleScrollBottom}>
                <div className={styles.searchContainer}>
                    <SearchInput
                        className={styles.search}
                        throttle={200}
                        onChange={(newValue: string) => setSearchQuery(newValue)}
                    />

                    <button onClick={handleSearch} disabled={!searchQuery.trim()}>
                        Search
                    </button>
                </div>
                <CardGrid />
            </ScrollContainer>
        </div>
    )
}
