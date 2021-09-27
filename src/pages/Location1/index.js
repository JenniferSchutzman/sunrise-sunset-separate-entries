import React from 'react'
import Header from '../../components/Header'
import LocationEntry from '../../components/LocationEntry'

const Location1 = (props) => {

    return (
        <section className="App w-full flex justify-center items-center p-5">
            <div className="w-full max-w-md bg-white-800">
                <div className="space-y-8 divide-y divide-gray-200">
                    <Header />
                    <LocationEntry
                        locationNumber={1}

                    />
                </div>
            </div>
        </section>
    )
}

export default Location1;


