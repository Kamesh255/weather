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
        <p>{details}</p>
      </div>
      <div className="temprature">
        <img src={iconUrlFromCode(icon)} alt="" />
        <p>{`${Math.floor(temp)}°C`}</p>
        <div style={{ textAlign: "left" }}>
          <div>
            <FaTemperatureLow />
            Real feal : <span>{`${feels_like}°`}</span>
          </div>
          <div>
            <WiHumidity />
            Humidity : <span>{`${humidity}°`}</span>
          </div>
          <div>
            <BiWind />
            Wind : <span>{`${speed}km/h`}</span>
          </div>
        </div>
      </div>

      <div className="sunset">
        <FiSunrise />
        <p>
          Rise : <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p style={{ marginLeft: "10px" }}> | </p>

        <FiSunset style={{ marginLeft: "10px" }} />
        <p>
          {" "}
          Set : <span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
        <p style={{ marginLeft: "10px" }}>|</p>

        <AiOutlineArrowUp style={{ marginLeft: "10px" }} />
        <p>
          High : <span>{`${Math.floor(temp_max)}°`}</span>
        </p>
        <p style={{ marginLeft: "10px" }}>|</p>

        <AiOutlineArrowDown style={{ marginLeft: "10px" }} />
        <p>
          Low : <span>{`${Math.floor(temp_min)}°`}</span>
        </p>
      </div>
    </div>
  );
};

export default Temperature;
