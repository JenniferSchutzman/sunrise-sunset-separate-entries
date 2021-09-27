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
        <>
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
                        <p className="mt-1 text-xs  text-gray-500">
                            Latitude is given in 2 digits before the decimal and ranging between -90.00000 to 90.00000
                        </p>
                        <div className="mt-1">
                            <input
                                name="lat"
                                id="lat"
                                aria-invalid={errorLat ? "true" : "false"}
                                value={latValue}
                                onChange={(e) => setLatValue(e.target.value)}
                                placeholder="00.000000"
                                type="number"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                            {errorLat && <span className="text-red-300 text-xs">* This field is required and only accepts values between -90 and 90</span>}
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="long" >Longitude </label>
                        <p className="mt-1 text-xs  text-gray-500" >
                            Longitude is given in 2 digits before the decimal and ranging between -180.00000 to 180.00000
                        </p>
                        <div className="mt-1">
                            <input
                                name="long"
                                id="long"
                                placeholder="00.000000"
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
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Next
                        </button>
                    </div>
                </div>

            </div >
        </>
    )
}

export default LocationEntry