import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import initialState from '../../pages/Location1/initialState';


const LocationEntry = ({
    locationNumber,
}) => {
    const [cityNameValue, setCityNameValue] = useState('')
    const [latValue, setLatValue] = useState()
    const [longValue, setLongValue] = useState()
    const [errorCityName, setErrorCityName] = useState(false)
    const [errorLat, setErrorLat] = useState(false)
    const [errorLong, setErrorLong] = useState(false)
    const [dataValidated, setDataValidated] = useState(false)
    const [dataState, setDataState] = useState(initialState)
    const history = useHistory();
    const location = useLocation()
    // console.log('dataState', dataState)
    console.log('location.state', location.state)
    useEffect(() => {
        locationNumber !== 1 ? setDataState(location.state) : setDataState(initialState)
    }, [locationNumber, location])

    useEffect(() => {
        errorCityName || errorLat || errorLong ? setDataValidated(false) : setDataValidated(true)
    }, [errorCityName, errorLat, errorLong])

    console.log(dataValidated)

    useEffect(() => {
        if (dataValidated === true) {
            // console.log('inside data validated', dataValidated)
            const dataToPassNext = dataState.map(item => {
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
            // will need to spread into initial state and then filter outduplicate if existing
            console.log('dataToPassNext', dataToPassNext)
            const routeToPassNext = locationNumber !== 5 ? `/location${locationNumber + 1}` : '/results'
            console.log('rtoueToPassNext', routeToPassNext)
            if (dataToPassNext && routeToPassNext) {
                console.log('inside if')
                history.push({
                    pathname: routeToPassNext,
                    state: dataToPassNext
                })
            }
        }
    }, [dataValidated])

    const checkValidation = () => {
        console.log(('cityName', cityNameValue))
        console.log('lat', latValue)
        console.log('long', longValue)
        cityNameValue === '' ? setErrorCityName(true) : setErrorCityName(false)
        !latValue ? setErrorLat(true) : setErrorLat(false)
        !longValue ? setErrorLong(true) : setErrorLong(false)
    }

    return (
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
                            min="-90"
                            max="90"
                            step="any"
                            aria-invalid={errorLat ? "true" : "false"}
                            value={latValue}
                            onChange={(e) => setLatValue(e.target.value)}
                            placeholder="00.000000"
                            type="number"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                        {errorLat && <span className="text-red-300 text-xs">* This field is required</span>}
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="long" >Longitude </label>
                    <div className="mt-1">
                        <input
                            name="long"
                            id="long"
                            placeholder="00.000000"
                            aria-invalid={errorLong ? "true" : "false"}
                            value={longValue}
                            onChange={(e) => setLongValue(e.target.value)}
                            type="number"
                            min="-180"
                            max="180"
                            step="any"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                        {errorLong && <span className="text-red-300 text-xs">* This field is required</span>}
                    </div>
                </div>
            </div >

            <div className="pt-5">
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={checkValidation}
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Next
                    </button>
                </div>
            </div>

        </div >

    )
}

export default LocationEntry