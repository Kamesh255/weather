import React, { useEffect, useState } from "react";
import "./style/Home.css";
import { BsSearch } from "react-icons/bs";
import { AiTwotoneEnvironment } from "react-icons/ai";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import getFormattedWeatherData from "./script";

const Home = () => {
  const [query, setQuery] = useState({ q: "indore" });
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchData();
  }, [query, units]);

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
      setCity('')
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({ lat, lon });
      });
    }
  };

 
  return (
    <div className="container">
      <div className="search">
        <div  onClick={handleLocationClick}>
          <AiTwotoneEnvironment
            className="location" 
          />
        </div>
        <div>
          <input
            style={{
              border: "none",
              fontSize: "20px",
              width: "full",
              height: "100%", 
            }}
            type="text"
            placeholder="Search your city"
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
          />
        </div>
        <div onClick={handleSearchClick}>
          <BsSearch className="search_icon"/>
        </div> 
      </div>
      <br />
      {weather && (
        <div>
          <Forecast title="DAILY FORECAST" items={weather.daily} />
            <div className="timeAndGraf">  
                <Temperature weather={weather} items={weather.hourly} location={weather}/> 
            </div>
        </div>
      )}
    </div>
  );
};

export default Home;
