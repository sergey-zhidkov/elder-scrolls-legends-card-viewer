import React, { UIEventHandler } from "react"
import styles from "./ScrollContainer.module.scss"
import { buildClassName } from "../../utils/utils"

interface ScrollContainerProps {
    className?: string
    onScroll?: UIEventHandler
    onScrollToBottom?: () => void
}

const margin = 5

export const ScrollContainer: React.FC<ScrollContainerProps> = ({
    className,
    children,
    onScroll,
    onScrollToBottom,
}): JSX.Element => {
    const handleSroll: UIEventHandler<HTMLDivElement> = event => {
        onScroll && onScroll(event)
        handleScrollBottom(event)
    }

    const handleScrollBottom = (event: React.UIEvent<HTMLDivElement>): void => {
        if (!onScrollToBottom) return
        const element = event.target as HTMLDivElement
        if (element.scrollTop + element.clientHeight + margin >= element.scrollHeight) {
            onScrollToBottom()
        }
    }

    return (
        <div className={buildClassName("ScrollContainer", styles.ScrollContainer, className)} onScroll={handleSroll}>
            {children}
        </div>
    )
}
