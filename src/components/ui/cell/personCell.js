import React from "react";
import {Link} from "react-router-dom";
import {H2Default, P1LowEmphasis} from "../typography";
import {ReactComponent as KeyArrow} from '../../../assets/icons/keyArrow.svg';
import styles from './personCell.module.scss'

export default function PersonCell({name, raceAndlocation, id}) {
    return (
        <li className={styles.PersonCellContainer}>
            <Link to={`/personInfo/${id}`} className={styles.PersonLink}>
                <div className={styles.TextContainer}>
                    <H2Default>{name}</H2Default>
                    <P1LowEmphasis>{raceAndlocation}</P1LowEmphasis>
                </div>
                <div className={styles.KeyArrowContainer}>
                    <KeyArrow/>
                </div>
            </Link>
        </li>
    )
}