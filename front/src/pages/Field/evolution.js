import * as React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const data = [
  {
    timestamp: "2022-27-01",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    timestamp: "2022-28-01",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    timestamp: "2022-29-01",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    timestamp: "2022-30-01",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    timestamp: "2022-31-01",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    timestamp: "2022-02-01",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    timestamp: "2022-02-02",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Evolution = ({ kpiName, value, trend, definition, color }) => {
  return (
    <Card
      sx={{
        width: "600px",
        backgroundColor: "primary.light",
        margin: "10px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "primary.light",
        }}
      >
        <Box
          style={{
            width: "100%",
            fontSize: 18,
            alignSelf: "flex-end",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography color="primary.text"> {kpiName}</Typography>
            <Typography sx={{ mb: 1.5 }} color="secondary.grey">
              {definition}
            </Typography>
          </Typography>
          <Typography sx={{ color: "#8884d8" }}>{value}</Typography>
        </Box>

      </CardContent>
      <AreaChart
        width={600}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill={color == "green" ? "url(#colorGreen)" : "url(#colorPurple)"}
        />
      </AreaChart>
    </Card>
  );
};
export default Evolution;
