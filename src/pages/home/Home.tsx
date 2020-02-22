import React from "react"
import styles from "./Home.module.scss"
import { RouteComponentProps } from "react-router-dom"
import { CardGrid } from "../cards/CardGrid"
import { useDispatch } from "react-redux"
import { actions } from "../../store/actions"

interface HomeProps extends RouteComponentProps {
    className?: string
}

export function Home({ className }: HomeProps): JSX.Element {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(actions.getCards())
    }, [])

    return (
        <div className={`Home ${styles.Home} ${className ?? ""}`}>
            <CardGrid />
        </div>
    )
}
