import {useIsDesktopOrLaptop} from "./utils/screens";
import {gql, useQuery} from "@apollo/client";
import React, {useEffect} from "react";
import PageTitleBanner from "./components/pageTitleBanner";
import DesktopHome from "./components/desktop/desktopHome";
import MobileHome from "./components/mobile/mobileHome";

const styles = require("./app.module.scss");

function App() {
    const isDesktopOrLaptop = useIsDesktopOrLaptop()
    const getAllPeople = gql`
      query {
            allPeople {
              people {
                id
                name
                species {
                  name
                }
                homeworld {
                  name
                }
              }
            }}`
    const {loading, data, error} = useQuery(getAllPeople);
    const [allPeople, setAllPeople] = React.useState([])
    const [mobileBanner, setMobileBanner] = React.useState("People of Star Wars")

    useEffect(() => {
        if (data) {
            const {allPeople: {people}} = data
            setAllPeople(people)
        }
    }, [data])

    return (
        <main className={styles.App}>
            <section className={styles.MainSection}>
                <PageTitleBanner mobileBanner={mobileBanner}/>
                {isDesktopOrLaptop ?
                    <DesktopHome loading={loading} error={error} allPeople={allPeople}/> :
                    <MobileHome
                        loading={loading}
                        error={error}
                        allPeople={allPeople}
                        mobileBanner={mobileBanner}
                        setMobileBanner={setMobileBanner}/>
                }
            </section>
        </main>
    );
}

export default App;
