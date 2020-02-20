import React from "react"
import styles from "./Shell.module.scss"
import { Switch, Route } from "react-router-dom"
import { NoMatch } from "./NoMatch"

interface ShellProps {
    className?: string
}

export function Shell({ className }: ShellProps): JSX.Element {
    const renderRouters = (): JSX.Element => {
        return (
            <Switch>
                <Route exact={true} path={""} render={props => <div>1</div>} />
                <Route component={NoMatch} />
            </Switch>
        )
    }

    return <div className={`Shell ${styles.Shell} ${className ?? ""}`}>Shell{renderRouters()}</div>
}
