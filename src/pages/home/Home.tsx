import React, { useEffect, useState } from "react"
import styles from "./Home.module.scss"
import { RouteComponentProps } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../store/actions"
import { buildClassName } from "../../utils/utils"
import { CardGrid } from "../../shared/cards/CardGrid"
import { ScrollContainer } from "../../shared/scrollContainer/ScrollContainer"
import { RootState } from "../../store/store"
import { FetchState } from "../../store/reducers"
import { Search } from "../../shared/search/Search"

interface HomeProps extends RouteComponentProps {
    className?: string
}

export function Home({ className }: HomeProps): JSX.Element {
    const [searchMode, setSearchMode] = useState(false)

    const cards = useSelector((state: RootState) => state.cardState.cards)
    const { fetchState, searchResponse } = useSelector((state: RootState) => state.cardState.cardListInfo)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!cards?.length) {
            dispatch(actions.getNextCards())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleScrollToBottom = (): void => {
        const cardsCount = cards?.length || 0
        const totalCount = searchResponse?._totalCount
        if (cardsCount === totalCount || fetchState === FetchState.Loading) {
            return
        }
        dispatch(actions.getNextCards())
    }

    const handleSearch = (query: string): void => {
        if (query.trim()) {
            setSearchMode(true)
            dispatch(actions.searchCardsByName(query.trim()))
        }
    }

    const handleSearchReset = (): void => {
        if (searchMode) {
            setSearchMode(false)
            dispatch(actions.resetSearchState())
            dispatch(actions.getNextCards())
        }
    }

    return (
        <div className={buildClassName("Home", styles.Home, className)}>
            <ScrollContainer onScrollToBottom={handleScrollToBottom}>
                <Search onSeach={handleSearch} onReset={handleSearchReset} />
                <CardGrid />
            </ScrollContainer>
        </div>
    )
}
