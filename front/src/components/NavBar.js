import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AgricultureIcon from '@mui/icons-material/Agriculture';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <AgricultureIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

        <Button key="champ" sx={{ my: 2, color: "white", display: "block" }}>
          <Link to="/champ" style={{ textDecoration: 'none', color:"white" }}> Champ</Link>
        </Button>

        <Button key="chai" sx={{ my: 2, color: "white", display: "block" }}>
          <Link to="/chai" style={{ textDecoration: 'none',color:"white" }}> Chai</Link>
        </Button>

      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
