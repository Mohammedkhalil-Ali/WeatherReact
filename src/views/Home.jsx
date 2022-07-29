import { logDOM } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchWeather } from '../app/modules/weather'
import './home.css'
const axios = require('axios');
export default function Home() {
  const state=useSelector((state)=>state)
  let [cityName , setName]=useState('london')
  const {loading,weather,error}=state
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchWeather('london'))
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
    console.log(weather);
  }
  return (
    <div className='w-screen h-screen stylem  flex justify-center items-center'>
      <div className="hamuy">
        <div className="nameCity">
        <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={Search}>Search</button>
        <div>{weather?.weather.data.location.name}</div>
        </div>

      </div>
    </div>
  )
}
