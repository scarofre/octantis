import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CallMade from "@mui/icons-material/CallMade";
import CallReceived from "@mui/icons-material/CallReceived";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function BasicCard({ value, trend, kpiName, definition, unit }) {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 300,
        backgroundColor: "primary.light",
        margin: "20px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
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
          color="primary.text"
          gutterBottom
        >
          <Typography> {kpiName}</Typography>
          <Tooltip title={definition}>
            <InfoIcon />
          </Tooltip>
        </Box>

        <Box color="primary.text">
          <Typography style={{ fontSize: 44 }}>{value} </Typography>
          <Typography style={{ fontSize: 24 }}>{unit} </Typography>
        </Box>
        <Box
          component="div"
          style={{
            fontSize: 14,
            alignSelf: "flex-start",
            display: "flex",
            alignItems: "flex-end",
          }}
          color="primary.text"
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
        </Box>
      </CardContent>
    </Card>
  );
}
