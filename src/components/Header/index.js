import React from 'react'

const Header = () => {
    return (
        <div>
            <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Sunset Sunrise Finder
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                    Below enter the city name, latitude, and longitude of 5
                    destinations before clicking 'Enter'
                </p>
                <p className=" mt-1 text-sm  text-gray-500 italic">
                    * Latitude is given in 2 digits before the decimal and ranging between -90.00000 to 90.00000
                </p>
                <p className="  mt-1 text-sm  text-gray-500 italic" >
                    *  Longitude is given in 2 digits before the decimal and ranging between -180.00000 to 180.00000
                </p>
            </div>
        </div>
    )
}

export default Header;