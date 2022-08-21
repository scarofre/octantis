import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BasicCard from "../../components/Card";
import Evolution from "./evolution";
import Box from "@mui/material/Box";
import { useState } from "react";

const KPIS = [
  {
    name: "Wind",
    value: 35,
    trend: 12,
    unit: "M/s",
    definition: "Current speed of wind.",
    color: "purple",
  },
  {
    name: "Temperature",
    value: 26,
    trend: 3,
    unit: "C",
    definition: "Current temperature in celsius.",
    color: "green",
  },
  {
    name: "Pluviometrie",
    value: 35,
    trend: 7,
    unit: "mm",
    definition: "Quantity of rain in the last hour.",
    color: "green",
  },
  {
    name: "Rosée point",
    value: 21.5,
    trend: 1.7,
    unit: "C",
    definition: "I don't know.",
    color: "purple",
  },
  {
    name: "Humidity",
    value: 34,
    trend: -24,
    unit: "%",
    definition: "Humidity rate.",
    color: "green",
  },
];

const Field = () => {
  const [isLiveExpanded, setIsLiveExpanded] = useState(true);
  const [isEvolutionExpanded, setIsEvolutionExpanded] = useState(true);

  return (
    <Box sx={{ backgroundColor: "primary.main", width: "100%", height:"100%" }}>
      <Accordion expanded={isLiveExpanded} onChange={()=>setIsLiveExpanded(!isLiveExpanded)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="success" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            flexDirection: "row-reverse",
            backgroundColor: "primary.main",
            color: "secondary.main",
          }}
        >
          <Typography color="primary.text"> Live </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "primary.main",
            flexWrap: "wrap"
          }}
        >
          {KPIS.map((kpi) => (
            <BasicCard
              value={kpi.value}
              trend={kpi.trend}
              kpiName={kpi.name}
              definition={"Current speed of the wind."}
              unit={kpi.unit}
            />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={isEvolutionExpanded} onChange={()=>setIsEvolutionExpanded(!isEvolutionExpanded)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="success" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            flexDirection: "row-reverse",
            backgroundColor: "primary.main",
            color: "secondary.main",
          }}
        >
          <Typography color="primary.text">History</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "primary.main",
          }}
        >
          {KPIS.map((kpi) => (
            <Evolution
              color={kpi.color}
              value={kpi.value}
              kpiName={kpi.name}
              definition={"Current speed of the wind."}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default Field;
