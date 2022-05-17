import "./NavBar.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

// UpperCamelCase
const NavBar = () => {
  return (
    <AppBar position="static" className="header-principal">
      <Toolbar>
        <div className="logo">
          <img src="./logo_navBar.png" alt="logo" />
        </div>
        <div className="listaNav">
          <ul className="lista">
            <li>
              <Button className="btm-nav" variant="text" size="medium">
                Inicio
              </Button>
            </li>
            <li>
              <Button className="btm-nav" variant="text" size="medium">
                Productos
              </Button>
            </li>
            <li>
              <Button className="btm-nav" variant="text" size="medium">
                Contacto
              </Button>
            </li>
          </ul>
        </div>
        <Button className="btm-nav">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
