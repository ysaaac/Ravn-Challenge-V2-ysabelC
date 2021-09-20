import React from "react";
import {H2LowEmphasis} from "./typography";
import {ReactComponent as ActivityIndicator} from '../../assets/icons/activityIndicator.svg';
import styles from './loadingIndicator.module.scss'

export default function LoadingIndicator() {
    return (
        <span className={styles.LoadingIndicatorContainer}>
            <ActivityIndicator/>
            <H2LowEmphasis>Loading</H2LowEmphasis>
        </span>
    )
}