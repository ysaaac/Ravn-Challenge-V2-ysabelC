import React from "react";
import styles from "./homeNav.module.scss";
import LoadingCell from "../ui/cell/loadingCell";
import NoticeCell from "../ui/cell/noticeCell";
import PersonCell from "../ui/cell/personCell";
import {useIsDesktopOrLaptop} from "../../utils/screens";

export default function HomeNav({loading, error, allPeople, mobileBanner = null, setMobileBanner = null}) {
    const isDesktopOrLaptop = useIsDesktopOrLaptop()
    if (mobileBanner) {
        setMobileBanner("People of Star Wars")
    }
    return (
        <nav className={isDesktopOrLaptop ? styles.DesktopNav : styles.MobileNav}>
            {loading && <LoadingCell mobileBanner={mobileBanner} setMobileBanner={setMobileBanner}/>}
            {error &&
            <NoticeCell mobileBanner={mobileBanner} setMobileBanner={setMobileBanner}>
                Failed to Load Data
            </NoticeCell>}
            {allPeople?.map(({id, name, species, homeworld}) => {
                const specieName = species ? `${species.name}` : "Human"
                const raceAndlocation = `${specieName} from ${homeworld.name}`
                return (
                    <PersonCell key={id} name={name} raceAndlocation={raceAndlocation} id={id}/>
                )
            })}
        </nav>
    )
}