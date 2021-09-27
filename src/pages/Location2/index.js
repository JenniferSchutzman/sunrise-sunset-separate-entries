import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header'
import LocationEntry from '../../components/LocationEntry'


const Location2 = () => {
    const location = useLocation()
    const data = location.state
    return (
        <>
            <Header />
            <LocationEntry
                locationNumber={2}
                data={data}
            />
        </>
    )
}

export default Location2;


