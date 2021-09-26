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
            const data = [
                {
                    id: 1,
                    location: `${location.state.city1}`,
                    lat: `${location.state.lat1}`,
                    long: `${location.state.long1}`,
                },
                {
                    id: 2,
                    location: `${location.state.city2}`,
                    lat: `${location.state.lat2}`,
                    long: `${location.state.long2}`,
                },
                {
                    id: 3,
                    location: `${location.state.city3}`,
                    lat: `${location.state.lat3}`,
                    long: `${location.state.long3}`,
                },
                {
                    id: 4,
                    location: `${location.state.city4}`,
                    lat: `${location.state.lat4}`,
                    long: `${location.state.long4}`,
                },
                {
                    id: 5,
                    location: `${location.state.city5}`,
                    lat: `${location.state.lat5}`,
                    long: `${location.state.long5}`,
                },
            ];
            setDataForApi(data);
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
