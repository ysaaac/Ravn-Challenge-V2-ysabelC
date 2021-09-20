import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import SectionHeader from "../ui/sectionHeader";
import DataCell from "../ui/cell/dataCell";

function PersonVehicles(vehicles) {
    if (vehicles.length > 0) {
        return (
            vehicles.map(({ name }, index) =>
                <DataCell key={index} cellName={name} />
            )
        )
    }
    return (<DataCell cellName={"No vehicles founded"} />)
}

export default function PersonInfo({ mobileBanner = null, setMobileBanner = null}) {
    const { personId } = useParams();
    const getPersonData = gql`
    query {
           person(id: "${personId}") {
             name
             eyeColor
             hairColor
             skinColor
             birthYear
             vehicleConnection {
               vehicles {
                 name
               }
             }
           }}`
    const { data } = useQuery(getPersonData);
    const [personData, setPersonData] = React.useState(null)

    useEffect(() => {
        if (data) {
            const { person } = data
            setPersonData(person)
        }

    }, [data])

    if (!personData) {
        return null
    }

    const { name, eyeColor, hairColor, skinColor, birthYear, vehicleConnection: { vehicles } } = personData
    
    if (mobileBanner) { 
        setMobileBanner(name) 
    }
    
    return (
        <section>
            <SectionHeader>General Information</SectionHeader>
            <ul>
                <DataCell cellName={"Eye Color"} cellValue={eyeColor} />
                <DataCell cellName={"Hair Color"} cellValue={hairColor} />
                <DataCell cellName={"Skin Color"} cellValue={skinColor} />
                <DataCell cellName={"Birth Year"} cellValue={birthYear} />
            </ul>
            <SectionHeader>Vehicles</SectionHeader>
            <ul>
                <PersonVehicles vehicles={vehicles} />
            </ul>
        </section>
    )
}