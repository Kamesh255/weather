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

       <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'15px',alignItems:'center',justifyContent:'space-between',padding:'5px',margin:'0 5px 0 5px'}}>
          <div style={{width:'fit-content',padding:"10px",borderRadius:'5px',backgroundColor:'#F3FBFF'}}> 
            <FaTemperatureLow color="red" />
            Real feal : <span>{`${feels_like}°C`}</span>
          </div>
          <div style={{width:'fit-content',padding:"10px",borderRadius:'5px',backgroundColor:'#F3FBFF'}}>
            <WiHumidity color="blue"  />
            Humidity : <span>{`${humidity}%`}</span>
          </div>
          {/* <div style={{width:'fit-content', backgroundColor:'EDF9F8'}}>
            <BiWind color="#6DE5F7" />
            Wind : <span>{`${speed}km/h`}</span>
          </div> */}
      </div>
      <br />
      <div className="sunset">
        <div> 
        <FiSunrise color="#EC6E4C" size={30} />
        <p>
          Sunrise <br /><span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        </div>

        <div> 
        <FiSunset color="#9E4F02" size={30} style={{ marginLeft: "10px" }} />
        <p> 
          Sunset <br /><span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p> 
        </div>
      </div>
        <img style={{width:'90%',margin:'auto '}} src="rise-set.png" alt="" />
        <div style={{display:'flex', alignItems:'center',justifyContent:'space-between', margin:'0 15px 0 15px'}}> 
          <p>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</p> 
          <p>{formatToLocalTime(sunset, timezone, "hh:mm a")}</p>
        </div>
      <br />
    </div>
  );
};

export default Temperature;
