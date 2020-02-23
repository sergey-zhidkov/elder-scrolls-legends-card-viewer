import React from "react"
import styles from "./NoMatch.module.scss"
import { buildClassName } from "../../utils/utils"

interface NoMatchProps {
    className?: string
}

export function NoMatch({ className }: NoMatchProps): JSX.Element {
    return (
        <div className={buildClassName("NoMatch", styles.NoMatch, className)}>
            <div className={styles.error}>Page not found</div>
        </div>
    )
}
