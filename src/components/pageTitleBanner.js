import React from "react";
import styles from "./pageTitleBanner.module.scss";
import {useIsDesktopOrLaptop} from "../utils/screens";
import {ReactComponent as GoBack} from '../assets/icons/goBack.svg';
import clsx from "clsx";

export default function PageTitleBanner({mobileBanner}) {
    const isDesktopOrLaptop = useIsDesktopOrLaptop()
    if ((mobileBanner !== "People of Star Wars" || mobileBanner !== "People") && !isDesktopOrLaptop) {
        return (
            <nav className={clsx(styles.TopBanner, styles.TopBannerFixAligmentForMobile, styles.TopBannerForMobile)}>
                <a href="/">
                    <GoBack/>
                </a>
                {mobileBanner}
            </nav>
        )
    }
    return (
        <nav className={clsx(styles.TopBanner, !isDesktopOrLaptop && styles.TopBannerFixAligmentForMobile)}>
            <a href="/">{isDesktopOrLaptop ? "Ravn Star Wars Registry" : mobileBanner}</a>
        </nav>
    )
}