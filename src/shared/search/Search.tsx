import React, { useState } from "react"
import styles from "./Search.module.scss"
import { buildClassName } from "../../utils/utils"
// @ts-ignore
import SearchInput from "react-search-input"

interface SearchProps {
    className?: string
    onSeach?: (query: string) => void
}

export const Search: React.FC<SearchProps> = ({ className, onSeach }): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <div className={buildClassName("Search", styles.Search, className)}>
            <SearchInput
                className={styles.search}
                placeholder="Search by name"
                onChange={(newValue: string) => {
                    if (!newValue && onSeach) {
                        onSeach(newValue)
                    }
                    setSearchQuery(newValue)
                }}
                onKeyDown={(event: any) => {
                    if (event.key === "Enter") {
                        onSeach && onSeach(searchQuery)
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
