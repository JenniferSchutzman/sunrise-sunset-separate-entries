// import React from 'react'
//     if () {

//         const dataToPassNext = dataState.map(item => {
//             if (item.id === locationNumber) {
//                 return {
//                     id: item.id,
//                     location: cityNameValue,
//                     lat: latValue,
//                     long: longValue,
//                 }
//             }
//             return item
//         })
//         // will need to spread into initial state and then filter outduplicate if existing
//         console.log('dataToPassNext',)
//         setDataState(dataToPassNext)
//         const routeToPassNext = locationNumber !== 5 ? `/location${locationNumber + 1}` : '/results'
//         console.log('rtoueToPassNext', routeToPassNext)


//         // **** do not want ot trigger until all items with matching id are not "" or undefined
//         // if (dataToPassNext && routeToPassNext) {
//         //     console.log('inside if')
//         //     history.push({
//         //         pathname: routeToPassNext,
//         //         state: dataToPassNext
//         //     })
//         // }
//     }
// }


// useEffect(() => {
//     locationNumber !== 1 ? setDataState(location.state) : setDataState(initialState)
// }, [locationNumber, location])