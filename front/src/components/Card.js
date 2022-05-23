import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CallMade from "@mui/icons-material/CallMade";
import CallReceived from "@mui/icons-material/CallReceived";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";

export default function BasicCard({ value, trend, kpiName, definition, unit }) {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 300,
        backgroundColor: "#2E2E33",
        margin: "20px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#2E2E33",
        }}
      >
        <div
          style={{
            width: "100%",
            fontSize: 18,
            alignSelf: "flex-end",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          color="text.secondary"
          gutterBottom
        >
          <span> {kpiName}</span>
          <Tooltip title={definition}>
            <InfoIcon />
          </Tooltip>
        </div>

        <div>
          <span style={{ fontSize: 44 }}>{value} </span>
          <span style={{ fontSize: 24 }}>{unit} </span>
        </div>
        <div
          component="div"
          style={{
            fontSize: 14,
            alignSelf: "flex-start",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          {trend > 0 ? (
            <span>
              <CallMade color="success" />{" "}
              <span style={{ fontSize: 24 }}> {`+${trend}`} </span>
            </span>
          ) : (
            <span>
              <CallReceived color="error" />{" "}
              <span style={{ fontSize: 24 }}> {trend} </span>
            </span>
          )}

          <span style={{ fontSize: 14 }}>{unit} </span>
        </div>
      </CardContent>
    </Card>
  );
}
