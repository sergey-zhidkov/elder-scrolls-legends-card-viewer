import React from "react"
import styles from "./Home.module.scss"

interface HomeProps {
    className?: string
}

export function Home({ className }: HomeProps): JSX.Element {
    return <div className={`Home ${styles.Home} ${className ?? ""}`}>Home</div>
}
