/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

const LocationEntry = ({
    locationNumber,
    data,
}) => {
    const [cityNameValue, setCityNameValue] = useState('')
    const [latValue, setLatValue] = useState()
    const [longValue, setLongValue] = useState()
    const [errorCityName, setErrorCityName] = useState(false)
    const [errorLat, setErrorLat] = useState(false)
    const [errorLong, setErrorLong] = useState(false)
    const [dataValidated, setDataValidated] = useState(false)
    const [dataReady, setDataReady] = useState(false)
    const history = useHistory();

    useEffect(() => {
        if (dataReady === true) {
            const dataToPassNext =
                data.map(item => {
                    if (item.id === locationNumber) {
                        return {
                            id: item.id,
                            location: cityNameValue,
                            lat: latValue,
                            long: longValue,
                        }
                    }
                    return item
                })
            const routeToPassNext = locationNumber !== 5 ? `/location${locationNumber + 1}` : '/results'
            if (dataToPassNext && routeToPassNext) {
                history.push({
                    pathname: routeToPassNext,
                    state: dataToPassNext
                })
            }
        }
    }, [dataReady])


    useEffect(() => {
        errorCityName || errorLat || errorLong ? setDataValidated(false) : setDataValidated(true)
    }, [errorCityName, errorLat, errorLong])


    const checkValidation = () => {
        cityNameValue === '' ? setErrorCityName(true) : setErrorCityName(false)
        !latValue || latValue > 90 || latValue < -90 ? setErrorLat(true) : setErrorLat(false)
        !longValue || longValue > 180 || longValue < -180 ? setErrorLong(true) : setErrorLong(false)
        if (cityNameValue && latValue && longValue && dataValidated) {
            setDataReady(true)
        }
    }

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            checkValidation();
        }
    };

    return (
        <section className="App w-full flex justify-center items-center p-5">
            <div className="w-full max-w-md bg-white-800">
                <div className="space-y-8 divide-y divide-gray-200"></div>
                <div className="pt-8">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            <label> Location {locationNumber}</label>
                        </h3>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="cityName" >City Name </label>
                            <div className="mt-1">
                                <input
                                    name="cityName"
                                    id="cityName"
                                    placeholder="Type here"
                                    value={cityNameValue}
                                    onChange={(e) => setCityNameValue(e.target.value)}
                                    aria-invalid={errorCityName ? "true" : "false"}
                                    type="text"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                                {errorCityName && (<span className="text-red-300 text-xs">* This field is required</span>)}
                            </div >
                        </div >

                        <div className="sm:col-span-2">
                            <label htmlFor="lat" >Latitude </label>
                            <div className="mt-1">
                                <input
                                    name="lat"
                                    id="lat"
                                    aria-invalid={errorLat ? "true" : "false"}
                                    value={latValue}
                                    onChange={(e) => setLatValue(e.target.value)}
                                    placeholder="00.00000"
                                    type="number"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                                {errorLat && <span className="text-red-300 text-xs">* This field is required and only accepts values between -90 and 90</span>}
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="long" >Longitude </label>
                            <div className="mt-1">
                                <input
                                    name="long"
                                    id="long"
                                    placeholder="00.00000"
                                    aria-invalid={errorLong ? "true" : "false"}
                                    value={longValue}
                                    onChange={(e) => setLongValue(e.target.value)}
                                    type="number"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                                {errorLong && <span className="text-red-300 text-xs">* This field is required and only accepts values between -180 to 180 </span>}
                            </div>
                        </div>
                    </div >

                    <div className="pt-5">
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={() => checkValidation()}
                                onKeyPress={handleKeypress}
                                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Next
                            </button>
                        </div>
                    </div>

                </div >
            </div>
        </section >
    )
}

export default LocationEntry