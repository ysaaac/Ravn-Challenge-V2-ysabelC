import React from "react";
import styles from "./desktopHome.module.scss";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PersonInfo from "../shared/personInfo";
import HomeNav from "../shared/homeNav";

export default function DesktopHome({loading, error, allPeople}) {
    return (
        <section className={styles.DesktopContainer}>
            <Router>
                <HomeNav loading={loading} error={error} allPeople={allPeople}/>
                <section className={styles.DesktopData}>
                    {!loading && !error &&
                    <Switch>
                        <Route path="/personInfo/:personId">
                            <PersonInfo/>
                        </Route>
                    </Switch>
                    }
                </section>
            </Router>
        </section>
    )
}
