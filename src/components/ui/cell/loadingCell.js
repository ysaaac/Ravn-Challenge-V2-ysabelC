import React from "react";
import LoadingIndicator from "../loadingIndicator";
import styles from './loadingCell.module.scss'

export default function LoadingCell({mobileBanner = null, setMobileBanner = null}) {
    if (mobileBanner) {
        setMobileBanner("People of Star Wars")
    }
    return (
        <div className={styles.LoadingIndicatorContainer}>
            <LoadingIndicator/>
        </div>
    )
}