import React from "react";
import { iconUrlFromCode } from "./script";

const Forecast = ({ title, items }) => { 
   
  return (
    <div> 
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflowX: "auto",
          overflowY: "hidden",
          margin: "5px 10px 5px 10px",
        }}
      >
        {items.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
             
              }}
            >
              <p>{item.title}</p>
              <p>{`${Math.floor(item.temp)}°C`}</p>
              <img style={{width:'90px'}} src={iconUrlFromCode(item.icon)} alt="" />
              <p>{item.details}</p>
              <br />
            </div>
          );
        })}
      <br />
      </div>
    </div>
  );
};

export default Forecast;
