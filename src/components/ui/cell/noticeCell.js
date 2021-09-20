import React from "react";
import {H2HighEmphasis} from "../typography";
import styles from './noticeCell.module.scss'

export default function NoticeCell({children, mobileBanner = null, setMobileBanner = null}) {
    if (mobileBanner) {
        setMobileBanner("People")
    }
    return (
        <div className={styles.LoadingIndicatorContainer}>
            <H2HighEmphasis>{children}</H2HighEmphasis>
        </div>
    )
}