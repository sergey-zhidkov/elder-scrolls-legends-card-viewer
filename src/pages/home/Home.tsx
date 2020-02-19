import * as React from "react"
import styles from "./Home.module.scss"

interface HomeProps {
    className?: string
}

export function Home({ className }: HomeProps): JSX.Element {
    return (
        <div className={`Home ${styles.Home} ${className ?? ""}`}>
            Home
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
    )
}
