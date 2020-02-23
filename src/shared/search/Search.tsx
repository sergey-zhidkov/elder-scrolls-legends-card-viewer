import React, { useState } from "react"
import styles from "./Search.module.scss"
import { buildClassName } from "../../utils/utils"
// @ts-ignore
import SearchInput from "react-search-input"

interface SearchProps {
    className?: string
    onSeach?: (query: string) => void
    onReset?: () => void
}

export const Search: React.FC<SearchProps> = ({ className, onSeach, onReset }): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <div className={buildClassName("Search", styles.Search, className)}>
            <SearchInput
                className={styles.search}
                placeholder="Search by name"
                onChange={(newValue: string) => {
                    if (!newValue && onReset) {
                        onReset()
                    }
                    setSearchQuery(newValue)
                }}
                onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                    if (event.key === "Enter") {
                        const target = event.target as HTMLInputElement
                        onSeach && onSeach(target.value)
                    }
                }}
            />
            <button
                onClick={() => {
                    onSeach && onSeach(searchQuery)
                }}
                disabled={!searchQuery.trim()}
            >
                Search
            </button>
        </div>
    )
}
