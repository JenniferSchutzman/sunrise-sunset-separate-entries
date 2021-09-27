import React from 'react'
import Header from '../../components/Header'
import LocationEntry from '../../components/LocationEntry'
import initialState from '../../pages/Location1/initialState';

const Location1 = () => {
    const data = initialState
    return (
        <>
            <Header />
            <LocationEntry
                locationNumber={1}
                data={data}
            />
        </>
    )
}

export default Location1;


