import React from "react";
import {H2Default, H2LowEmphasis} from "../typography";
import styles from './dataCell.module.scss'

export default function DataCell({cellName, cellValue = null}) {
    return (
        <li className={styles.DataCellContainer}>
            <H2LowEmphasis className={styles.CellName}>{cellName}</H2LowEmphasis>
            {cellValue && <H2Default className={styles.CellValue}>{cellValue}</H2Default>}
        </li>
    )
}