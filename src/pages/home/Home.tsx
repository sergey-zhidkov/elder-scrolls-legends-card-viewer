import * as React from "react"

import "./Home.scss"

interface HomeProps {
    className?: string
}

export function Home({ className }: HomeProps): JSX.Element {
    return <div className={`Home ${className ?? ""}`}>Home</div>
}
