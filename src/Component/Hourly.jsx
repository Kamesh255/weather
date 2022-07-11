import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Area,
} from "recharts";

const Hourly = ({ items }) => {
  const chartData = items.map((el) => {
    return el;
  });

  return (
    <div style={{ textAlign: "left" }}>
      <div
        style={{ overflowX: "auto", overflowY: "hidden", textAlign: "left",height:'320px' }}
      >
        <ResponsiveContainer width="100%" aspect="1.2">
          <AreaChart
            data={chartData}
            width={500}
            height={300}
            margin={{ top: 10, right: 30, left: 5, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0D47A1" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0D47A1" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="2" />
            <XAxis dataKey="title" interval={"preserveStartEnd"} />

            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="temp"
              stroke="blue"
              activeDot={{ r: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Hourly;
