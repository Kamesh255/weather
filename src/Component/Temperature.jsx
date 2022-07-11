import React from "react";
import "./style/Temperature.css";
import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BiWind } from "react-icons/bi";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { formatToLocalTime, iconUrlFromCode } from "./script";

const Temperature = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  return (
    <div>
      <div>
        <p style={{color:"steelblue", fontWeight:'bolder'}} >{details}</p>
      </div>
      <div className="temprature">
        <img src={iconUrlFromCode(icon)} alt="" />
        <p style={{fontSize:"30px",fontWeight:"bold"}}>{`${Math.floor(temp)}°C`}</p>
        <div style={{ textAlign: "left" }}>
          <div>
            <FaTemperatureLow color="red" />
            Real feal : <span>{`${feels_like}°C`}</span>
          </div>
          <div>
            <WiHumidity color="blue" size={20} style={{margin:" 2px 2px 0px -4px"}} />
            Humidity : <span>{`${humidity}%`}</span>
          </div>
          <div>
            <BiWind color="yellow" />
            Wind : <span>{`${speed}km/h`}</span>
          </div>
        </div>
      </div>
   
      <div className="sunset">
        <FiSunrise color="yellow" size={30} />
        <p>
          Rise : <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p style={{ marginLeft: "10px" }}> | </p>

        <FiSunset color="#9E4F02" size={30} style={{ marginLeft: "10px" }} />
        <p>
          {" "}
          Set : <span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
        <p style={{ marginLeft: "10px" }}>|</p>

        <AiOutlineArrowUp color="#E11212" size={30} style={{ marginLeft: "10px" }} />
        <p>
          High : <span>{`${Math.floor(temp_max)}°C`}</span>
        </p>
        <p style={{ marginLeft: "10px" }}>|</p>

        <AiOutlineArrowDown color="#12D757" size={30} style={{ marginLeft: "10px" }} />
        <p>
          Low : <span>{`${Math.floor(temp_min)}°C`}</span>
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Temperature;
