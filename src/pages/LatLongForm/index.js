import React from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'

import '../../index.css';

const LatLongForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onSubmit = data => {
    history.push({
      pathname: '/results',
      state: data
    })
  };

  return (
    <section className="App w-full flex justify-center items-center p-5">
      <div className="w-full max-w-md bg-white-800">
        <fieldset label="Locations">
          <form
            className="space-y-8 divide-y divide-gray-200"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-8 divide-y divide-gray-200">
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
              {/* LOCATION ONE */}
              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    <label htmlFor="city1"> Location 1</label>
                  </h3>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-2">
                    <label htmlFor="city1" >City Name </label>
                    <div className="mt-1">
                      <input
                        name="city1"
                        id="city1"
                        defaultValue="Charleston"
                        placeholder="Type here"
                        aria-invalid={errors.city1 ? "true" : "false"}
                        type="text"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        {...register("city1", { required: true })}
                      />
                      {errors.city1 && <span className="text-red-300 text-xs">* This field is required</span>}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="lat1" >Latitude </label>
                    <div className="mt-1">
                      <input
                        name="lat1"
                        id="lat1"
                        defaultValue="32.7765"
                        aria-invalid={errors.city1 ? "true" : "false"}
                        placeholder="00.000000"
                        type="text"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        {...register("lat1", { required: true })}
                      />
                      {errors.lat1 && <span className="text-red-300 text-xs">* This field is required</span>}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="long1" >Longitude </label>
                    <div className="mt-1">
                      <input
                        name="long1"
                        id="long1"
                        defaultValue="79.0311"
                        placeholder="00.000000"
                        aria-invalid={errors.long1 ? "true" : "false"}
                        type="text"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        {...register("long1", { required: true })}
                      />
                      {errors.long1 && <span className="text-red-300 text-xs">* This field is required</span>}
                    </div>
                  </div>
                </div>
              </div>
              {/* LOCATION TWO */}
              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    <label htmlFor="city2"> Location 2</label>
                  </h3>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-2">
                    <label htmlFor="city2" >City Name </label>
                    <div className="mt-1">
                      <input
                        name="city2"
                        id="city2"
                        placeholder="Type here"
                        defaultValue="san francicso "
                        aria-invalid={errors.city2 ? "true" : "false"}
                        type="text"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        {...register("city2", { required: true })}
                      />
                      {errors.city2 && <span className="text-red-300 text-xs">* This field is required</span>}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="lat2" >Latitude </label>
                    <div className="mt-1">
                      <input
                        name="lat2"
                        id="lat2"
                        aria-invalid={errors.lat2 ? "true" : "false"}
                        defaultValue="37.7749"
                        placeholder="00.000000"
                        type="text"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        {...register("lat2", { required: true })}
                      />
                      {errors.lat2 && <span className="text-red-300 text-xs">* This field is required</span>}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="long2" >Longitude </label>
                    <div className="mt-1">
                      <input
                        name="long2"
                        id="long2"
                        defaultValue="122.4194"
                        placeholder="00.000000"
                        aria-invalid={errors.long2 ? "true" : "false"}
                        type="text"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        {...register("long2", { required: true })}
                      />
                      {errors.long2 && <span className="text-red-300 text-xs">* This field is required</span>}
                    </div>
                  </div>
                </div>
              </div>
              {/* LOCATION THREE */}
              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    <label> Location 3</label>
                  </h3>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-2">
                    <label htmlFor="city3" >City Name </label>
                    <div className="mt-1">
                      <input
                        name="city3"
                        id="city3"
                        placeholder="Type here"
                        defaultValue="Khartoum"
                        aria-invalid={errors.city3 ? "true" : "false"}
                        type="text"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        {...register("city3", { required: true })}
                      />
                      {errors.city3 && <span className="text-red-300 text-xs">* This field is required</span>}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="lat3" >Latitude </label>
                    <div className="mt-1">
                      <input
                        name="lat3"
                        id="lat3"
                        aria-invalid={errors.lat2 ? "true" : "false"}
                        defaultValue="15.5007"
                        placeholder="00.000000"
                        type="text"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        {...register("lat3", { required: true })}
                      />
                      {errors.lat3 && <span className="text-red-300 text-xs">* This field is required</span>}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="long3" >Longitude </label>
                    <div className="mt-1">
                      <input
                        name="long3"
                        id="long3"
                        defaultValue="32.5599"
                        placeholder="00.000000"
                        aria-invalid={errors.long2 ? "true" : "false"}
                        type="text"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        {...register("long3", { required: true })}
                      />
                      {errors.long3 && <span className="text-red-300 text-xs">* This field is required</span>}
                    </div>
                  </div>
                </div>
              </div>
              {/* LOCATION FOUR */}
              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    <label> Location 4</label>
                  </h3>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-2">
                    <label htmlFor="city4" >City Name </label>
                    <div className="mt-1">
                      <input
                        name="city4"
                        id="city4"
                        placeholder="Type here"
                        defaultValue="Bogota"
                        aria-invalid={errors.city4 ? "true" : "false"}
                        type="text"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        {...register("city4", { required: true })}
                      />
                      {errors.city4 && <span className="text-red-300 text-xs">* This field is required</span>}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="lat4" >Latitude </label>
                    <div className="mt-1">
                      <input
                        name="lat4"
                        id="lat4"
                        aria-invalid={errors.lat4 ? "true" : "false"}
                        defaultValue="14.7110"
                        placeholder="00.000000"
                        type="text"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        {...register("lat4", { required: true })}
                      />
                      {errors.lat4 && <span className="text-red-300 text-xs">* This field is required</span>}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="long4" >Longitude </label>
                    <div className="mt-1">
                      <input
                        name="long4"
                        id="long4"
                        defaultValue="374.0721"
                        placeholder="00.000000"
                        aria-invalid={errors.long2 ? "true" : "false"}
                        type="text"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        {...register("long4", { required: true })}
                      />
                      {errors.long4 && <span className="text-red-300 text-xs">* This field is required</span>}
                    </div>
                  </div>
                </div>
              </div>
              {/* LOCATION FIVE */}
              <div className="pt-8">
              </div>
            </div>


            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </fieldset>
      </div>
    </section >
  );
}

export default LatLongForm