import React, { useEffect, useState } from "react";
import ResultsCard from "../../components/ResultsCard";
import { useLocation } from "react-router-dom";
import moment from 'moment'


export default function Results() {
    const [dataForApi, setDataForApi] = useState([]);
    const [dataForCards, setDataForCards] = useState();
    const location = useLocation();

    useEffect(() => {
        if (location.state !== []) {
            setDataForApi(location.state);
        }
    }, [location.state]);

    useEffect(() => {
        if (dataForApi.length !== 0) {
            const getAPIdata = async (passUpData) => {
                try {
                    let response = await fetch(
                        `https://api.sunrise-sunset.org/json?lat=${passUpData.lat}&lng=${passUpData.long}&formatted=0`
                    );
                    const apiResponse = await response.json();
                    if (apiResponse.results && apiResponse.status === "OK") {
                        const dateSunset = new Date(apiResponse.results.sunset)
                        const dateSunrise = new Date(apiResponse.results.sunrise)
                        const sunset = moment.utc(dateSunset).local().format('h:mm A');
                        const sunrise = moment.utc(dateSunrise).local().format('h:mm A');
                        const data = dataForApi.filter(item => item.id === passUpData.id)

                        const locationSunriseSunset = data.map((item) => {
                            return {
                                location: item.location,
                                sunrise: sunrise.toString(),
                                sunset: sunset.toString(),
                                id: passUpData.id,
                            };
                        })
                        return locationSunriseSunset;
                    }
                } catch (err) {
                    console.log(err);
                }
            };
            let newArray;
            getAPIdata(dataForApi[0])
                .then((res) => {
                    newArray = [...(res)]
                })
                .then(() => {
                    getAPIdata(dataForApi[1])
                        .then((res) => {
                            newArray = newArray.concat(...res)
                        })
                        .then(() => {
                            getAPIdata(dataForApi[2])
                                .then((res) => {
                                    newArray = newArray.concat(...res)
                                })
                                .then(() =>
                                    getAPIdata(dataForApi[3])
                                        .then((res) => {
                                            newArray = newArray.concat(...res)
                                        })
                                        .then(() =>
                                            getAPIdata(dataForApi[4])
                                                .then((res) => {
                                                    newArray = newArray.concat(...res)
                                                    setDataForCards(newArray)
                                                })
                                        )
                                )
                        })
                })
        }
    }, [dataForApi, location.state]);

    console.log("dataForCards", dataForCards);

    return (
        <>
            {dataForCards &&
                (
                    dataForCards.map((item) => {
                        return <ResultsCard data={item} key={item} />;
                    })
                )
            }
        </>
    );
}
