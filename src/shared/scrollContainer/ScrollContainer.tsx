import React, { UIEventHandler } from "react"
import styles from "./ScrollContainer.module.scss"
import { buildClassName } from "../../utils/utils"

interface ScrollContainerProps {
    className?: string
    onScroll?: UIEventHandler
}

export const ScrollContainer: React.FC<ScrollContainerProps> = ({ className, children }): JSX.Element => {
    return <div className={buildClassName("ScrollContainer", styles.ScrollContainer, className)}>{children}</div>
}
