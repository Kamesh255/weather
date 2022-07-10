import React, { useEffect, useState } from 'react'
import './style/Home.css'
import { BsSearch } from "react-icons/bs";
import { AiTwotoneEnvironment } from "react-icons/ai";
import TimeAndLocation from './TimeAndLocation';
import Temperature from './Temperature';
import Forecast from './Forecast';
import getFormattedWeatherData from './script'


const Home = () => {

    const [query, setQuery] = useState({q:"seoni"})
    const [units, setUnits] = useState('metric')
    const [weather, setWeather] = useState(null)

    useEffect(()=>{ 
        const fetchData = async () =>{
           await getFormattedWeatherData({...query, units})
           .then((data) =>{
            setWeather(data)
           }) 
        }
        fetchData()
    },[query, units])

   console.log(weather)
  return (
    <div className='container'>
        <div className='search'>
            <div>
                <AiTwotoneEnvironment className='location' />
            </div>
            <div>
                <input style={{border:"none", fontSize:"20px", width:"full", height:"100%"}} type="text" placeholder='Search your city' />
            </div>
            <div>
                <BsSearch />
            </div> 
        </div>
        {weather && (
            <div>
                <TimeAndLocation weather={weather}/>
                <Temperature weather={weather}/>
                <Forecast title="HOURLY FORECAST" />
                <Forecast title="DAILY FORECAST" />
            </div>
        )}
    </div>
  )
}

export default Home