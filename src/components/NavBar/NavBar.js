import "./NavBar.css";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CartWidget from "../CartWidget/CartWidget";

// UpperCamelCase
const NavBar = () => {
  return (
    <AppBar position="static" className="header-principal">
      <Toolbar>
        <div className="logo">
          <img src="./logo_navBar.png" alt="logo" />
        </div>
        <div className="listNav">
          <ul className="list">
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
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
