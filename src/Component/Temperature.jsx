import React from "react";
import "./style/Temperature.css";
import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BiWind } from "react-icons/bi";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { formatToLocalTime, iconUrlFromCode } from "./script";
import Hourly from "./Hourly";
import TimeAndLocation from "./TimeAndLocation";

const Temperature = ({
  weather: {
    details,
    icon,
    temp,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },items,location
}) => {
  return (
    <div> 
      <div className="temprature">

        <p style={{fontSize:"40px",fontWeight:"bold"}}>{`${Math.floor(temp)}°C`}</p>

        <div> 
          <img style={{width:'90px'}} src={iconUrlFromCode(icon)} alt="" />
          <p style={{color:"steelblue", fontWeight:'500',margin:"-25px 0 0 0"}} >{details}</p>
        </div> 

        <div style={{ textAlign: "left" }}>
          <TimeAndLocation location={location}/> 
        </div>

      </div> 

      <Hourly items ={items} />  

      <br />  

      <div className="sunset">
        <FiSunrise color="#EC6E4C" size={30} />
        <p>
          Sunrise : <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p style={{ marginLeft: "10px" }}> | </p>

        <FiSunset color="#9E4F02" size={30} style={{ marginLeft: "10px" }} />
        <p>
          {" "}
          Sunset : <span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p> 
      </div>
      <br />
       <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'15px',alignItems:'center',justifyContent:'space-between',padding:'5px'}}>
          <div> 
            <FaTemperatureLow color="red" />
            Real feal : <span>{`${feels_like}°C`}</span>
          </div>
          <div>
            <WiHumidity color="blue"  />
            Humidity : <span>{`${humidity}%`}</span>
          </div>
          <div>
            <BiWind color="#6DE5F7" />
            Wind : <span>{`${speed}km/h`}</span>
          </div>
      </div>
      <br />
    </div>
  );
};

export default Temperature;
