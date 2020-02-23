import React from "react"
import styles from "./NoMatch.module.scss"

interface NoMatchProps {
    className?: string
}

export function NoMatch({ className }: NoMatchProps): JSX.Element {
    return (
        <div className={`NoMatch ${styles.NoMatch} ${className ?? ""}`}>
            <div className="error">Page not found</div>
            {/* TOOD: redirect to the root button */}
        </div>
    )
}
