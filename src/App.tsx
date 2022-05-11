import React from "react";
import { styled } from "@mui/system";

import { Breadcrumbs } from "@mui/material";

//Interfaces
import { NavLink } from "./interfaces";

//Components
import NavBar from "./Components/NavBar";

//Styles
import { Wrapper, HeroText } from "./App.styles";

import AddAlarmIcon from "@mui/icons-material/AddAlarm";
import AdbIcon from "@mui/icons-material/Adb";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const topNavBar: NavLink[] = [
  {
    path: "/about",
    color: "inherit",
    underline: "none",
    content: "About",
  },
  {
    path: "/contact",
    color: "inherit",
    underline: "none",
    content: "Contact",
  },
  {
    path: "/cart",
    color: "inherit",
    underline: "none",
    content: "Cart",
  },
];

function App() {
  return (
    <Wrapper>
      <NavBar links={topNavBar} />
      <HeroText>OceanSide</HeroText>
    </Wrapper>
  );
}

export default App;
