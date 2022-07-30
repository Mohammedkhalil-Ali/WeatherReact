import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchWeather } from '../app/modules/weather'

import './home.css'
export default function Home() {
  const state=useSelector((state)=>state)
  let [cityName , setName]=useState('london')
  const {loading,weather,error}=state
  const dispatch=useDispatch()
  useEffect(()=>{
    if(cityName){dispatch(fetchWeather(cityName))}else{dispatch(fetchWeather('london'))}
    
  },[])
  // const fet=()=>{
  //   axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=London`)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //   });
  // }

  const Search=()=>{
    dispatch(fetchWeather(cityName))
  }

        if(error){return (<div>Error</div>)}
        if(loading==true){return (<div>Loading</div>)}
  return (
    <div className='w-screen md:w-full h-full overflow-x-hidden'>
      <div className="header w-screen z-50  h-[50vh] md:h-[35vh] stylem flex justify-center md:block">
        <div className="hamuy z-50 md:flex md:justify-between">
          <div className='md:ml-6'>
          <div className="name text-2xl text-white mt-6 md:text-5xl ">{weather?.weather?.data?.location?.name}</div>
          <div className="name text-sm text-white opacity-40 md:text-xl ">{weather?.weather?.data?.location?.localtime}</div>
          </div>
          <div className='md:mt-20 md:mr-24'>
          <div className="name text-9xl mt-6 text-white relative">{Math.ceil(weather?.weather?.data?.current?.temp_c)} <div className='h-4 w-4 rounded-full border-4 border-white absolute -right-4 top-4'></div></div>
          <div className="name text-sm mt-4 text-white relative">Feels like {Math.ceil(weather?.weather?.data?.current?.feelslike_c)} <div className='h-2 w-2 rounded-full border-2 border-white absolute right-5 top-0'></div></div>
          </div>
          <div className='md:mr-16 z-50'>
          <div className="name text-sm md:text-2xl mt-4 text-white font-thin">{weather?.weather?.data?.current?.condition?.text}</div>
          <div className="mt-5 md:mt-0 z-50"><img src={weather?.weather?.data?.current?.condition?.icon} alt="" className='h-24 w-20 md:h-24 md:w-28 m-auto z-50'/></div>
          </div>
        </div>
      </div>
      <div className="header w-screen md:w-full -mt-1 z-10">
        <img src={require('../assets/attachment2.png')} alt=""  className='h-[15vh] md:h-[35vh] w-screen md:w-full'/>
      </div>
      <div className="header w-screen md:w-full  h-[30vh] md:h-[65vh] bg-white">
        <div className="searchBtn flex justify-center">
          <input type="text" className='bg-[rgb(125,188,245)] shadow-sm rounded-full p-2 placeholder:text-white placeholder:opacity-50 focus:border-0 focus:outline-none text-white' placeholder='Search ...' 
           onChange={(e)=>{setName(e.target.value)}}/> 
           <button className='bg-[rgb(34,129,220)] rounded-full ml-2 w-28 text-white flex justify-center items-center' onClick={Search}> <p className='opacity-90'>Search</p><i className="fa-solid fa-magnifying-glass-location text-white ml-2 opacity-90"></i></button>
        </div>
        <div className='Datakan grid grid-cols-3 w-[98%] mx-[1%] gap-2 mt-4'>
          <div className="yakam w-full md:flex md:justify-evenly md:items-center shadow-sm  h-20 md:h-40 rounded-md  mt-1">
          <div className=' flex justify-center'><img src={require('../assets/wind.png')} alt=""  className='w-10 h-10 mt-1 md:w-20 md:h-16'/></div>
          <p className='text-[rgb(125,188,245)] mt-2 text-sm md:text-3xl'>Wind : {Math.ceil(weather?.weather?.data?.current?.wind_mph)} mph</p>
          </div>
          
          <div className="yakam w-full md:flex md:justify-evenly md:items-center shadow-sm  h-20 md:h-40 rounded-md mt-1">
          <div className=' flex justify-center'><img src={require('../assets/wind-direction.png')} alt=""  className='w-10 h-10 mt-1 md:w-20 md:h-16'/></div>
          <p className='text-[rgb(125,188,245)] mt-2 text-sm md:text-3xl'>Direction: {weather?.weather?.data?.current?.wind_dir} </p>
          </div>

          <div className="yakam w-full md:flex md:justify-evenly md:items-center shadow-sm  h-20 md:h-40 rounded-md mt-1">
          <div className=' flex justify-center'><img src={require('../assets/precipitation.png')} alt=""  className='w-10 h-10 mt-1 md:w-20 md:h-16'/></div>
          <p className='text-[rgb(125,188,245)] mt-1 md:text-3xl'>Precip : {Math.ceil(weather?.weather?.data?.current?.precip_mm)} mm</p>
          </div>

          <div className="yakam w-full md:flex md:justify-evenly md:items-center shadow-sm  h-20 md:h-40 rounded-md mt-1">
          <div className=' flex justify-center'><img src={require('../assets/pressure-gauge.png')} alt=""  className='w-10 h-10 mt-1 md:w-20 md:h-16'/></div>
          <p className='text-[rgb(125,188,245)] mt-1 md:text-3xl'>Pressure : {Math.ceil(weather?.weather?.data?.current?.pressure_in)} in</p>
          </div>

          <div className="yakam w-full md:flex md:justify-evenly md:items-center shadow-sm  h-20 md:h-40 rounded-md mt-1">
          <div className=' flex justify-center'><img src={require('../assets/tornado.png')} alt=""  className='w-10 h-10 mt-1 md:w-20 md:h-16'/></div>
          <p className='text-[rgb(125,188,245)] mt-1 md:text-3xl'>Gust : {Math.ceil(weather?.weather?.data?.current?.gust_mph)} mph</p>
          </div>

          <div className="yakam w-full md:flex md:justify-evenly md:items-center shadow-sm  h-20 md:h-40 rounded-md mt-1">
          <div className=' flex justify-center'><img src={require('../assets/celsius.png')} alt=""  className='w-10 h-10 mt-1 md:w-20 md:h-16'/></div>
          <p className='text-[rgb(125,188,245)] mt-1 md:text-3xl'>Vis : {Math.ceil(weather?.weather?.data?.current?.vis_miles)} miles</p>
          </div>
        </div>
      </div>
      <div className='text-black opacity-90 mt-4'> Developted By Mohammed Khalil</div>
    </div>
  )
}
