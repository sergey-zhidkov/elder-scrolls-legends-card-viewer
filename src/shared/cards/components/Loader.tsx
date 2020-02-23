import React from "react"
import styles from "./Loader.module.scss"
import { buildClassName } from "../../../utils/utils"
import { PropagateLoader } from "react-spinners"

interface LoaderProps {
    className?: string
    loading: boolean
}

export const Loader: React.FC<LoaderProps> = ({ className, loading }): JSX.Element => {
    return (
        <div className={buildClassName("Loader", styles.Loader, className)}>
            <PropagateLoader size={40} loading={loading} color="#0078d4" />
        </div>
    )
}
