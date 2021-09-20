import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomeNav from "../shared/homeNav";
import PersonInfo from "../shared/personInfo";

export default function MobileHome({loading, error, allPeople, mobileBanner, setMobileBanner}) {
    return (
        <section>
            <Router>
                {!loading && !error &&
                <Switch>
                    <Route path="/personInfo/:personId">
                        <PersonInfo setMobileBanner={setMobileBanner} mobileBanner={mobileBanner}/>
                    </Route>
                    <Route path="/">
                        <HomeNav
                            loading={loading}
                            error={error}
                            allPeople={allPeople}
                            mobileBanner={mobileBanner}
                            setMobileBanner={setMobileBanner}/>
                    </Route>
                </Switch>
                }
            </Router>
        </section>
    )
}