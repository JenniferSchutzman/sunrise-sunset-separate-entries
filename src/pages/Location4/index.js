
import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header'
import LocationEntry from '../../components/LocationEntry'


const Location4 = (props) => {
    const location = useLocation()
    const data = location.state
    return (
        <>
            <Header />
            <LocationEntry
                locationNumber={4}
                data={data}
            />
        </>
    )
}

export default Location4;




