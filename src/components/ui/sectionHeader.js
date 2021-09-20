import React from "react";
import {H2Default} from "./typography";
import styles from './sectionHeader.module.scss'

export default function SectionHeader({children}) {
    return (
        <header className={styles.SectionHeaderContainer}>
            <H2Default>{children}</H2Default>
        </header>
    )
}