import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header'
import LocationEntry from '../../components/LocationEntry'


const Location5 = (props) => {
    const location = useLocation()
    const data = location.state
    return (
        <section className="App w-full flex justify-center items-center p-5">
            <div className="w-full max-w-md bg-white-800">
                <div className="space-y-8 divide-y divide-gray-200">
                    <Header />
                    <LocationEntry
                        locationNumber={5}
                        data={data}
                    />
                </div>
            </div>
        </section>
    )
}

export default Location5;


