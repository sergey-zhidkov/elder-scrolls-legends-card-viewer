import React, { useState, useEffect } from "react"
import styles from "./Home.module.scss"
import { RouteComponentProps } from "react-router-dom"
import { useDispatch } from "react-redux"
import { actions } from "../../store/actions"
import { buildClassName } from "../../utils/utils"
import { CardGrid } from "../../shared/cards/CardGrid"
import { ScrollContainer } from "../../shared/scrollContainer/ScrollContainer"

interface HomeProps extends RouteComponentProps {
    className?: string
}

export function Home({ className }: HomeProps): JSX.Element {
    const [timerId, setTimerId] = useState<number>()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getCards())
    }, [])

    const handleScroll = (event: React.UIEvent<HTMLDivElement>): void => {
        // setTimerId(timerId => {
        //     if (timerId) {
        //         console.log(timerId, " << NO")
        //         return timerId
        //     } else {
        //         return requestAnimationFrame(() => {
        //             console.log(timerId)
        //         })
        //     }
        // })
        const element = event.target as HTMLDivElement
        console.log(element, element.scrollHeight, element.scrollTop, element.clientHeight)
    }

    return (
        <div className={buildClassName("Home", styles.Home, className)}>
            <ScrollContainer onScroll={handleScroll}>
                <CardGrid />
            </ScrollContainer>
        </div>
    )
}
