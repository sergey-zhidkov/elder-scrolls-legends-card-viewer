import React from "react"
import styles from "./Shell.module.scss"
import { Switch, Route } from "react-router-dom"
import { NoMatch } from "./NoMatch"
import { CardGrid } from "../cards/CardGrid"

interface ShellProps {
    className?: string
}

export function Shell({ className }: ShellProps): JSX.Element {
    const renderRouters = (): JSX.Element => {
        return (
            <Switch>
                <Route exact={true} path={"/"} render={props => <CardGrid {...props} />} />
                <Route component={NoMatch} />
            </Switch>
        )
    }

    return <div className={`Shell ${styles.Shell} ${className ?? ""}`}>{renderRouters()}</div>
}
