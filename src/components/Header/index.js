import React from 'react'

const Header = () => {
    return (
        <div className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
                <div className="max-w-xl">
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Sunrise Sunset Calculator</h2>
                    <p className="mt-5 text-xl text-gray-400">Enter the city name, latitude and longitude of 5 different locations, one at a time, to find out the the sunrise and sunset in coordinated universal time</p>
                </div>

            </div>
        </div>
    )
}

export default Header;