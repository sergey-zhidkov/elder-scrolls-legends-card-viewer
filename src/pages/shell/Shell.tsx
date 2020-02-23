import React from "react"
import styles from "./Shell.module.scss"
import { Switch, Route } from "react-router-dom"
import { NoMatch } from "./NoMatch"
import { Home } from "../home/Home"
import { buildClassName } from "../../utils/utils"

interface ShellProps {
    className?: string
}

export function Shell({ className }: ShellProps): JSX.Element {
    const renderRouters = (): JSX.Element => {
        return (
            <Switch>
                <Route exact={true} path={"/"} render={props => <Home {...props} />} />
                <Route component={NoMatch} />
            </Switch>
        )
    }

    return <div className={buildClassName("Shell", styles.Shell, className)}>{renderRouters()}</div>
}
