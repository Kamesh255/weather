import React from "react";
import { formatToLocalTime } from "./script";

const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <div>
      <div>
        <p style={{fontSize:"35px",fontWeight:"bold"}}>{`${name},${country}`}</p>
      </div>
      <div>
        <p style={{fontWeight:450}}>{formatToLocalTime(dt, timezone)}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
