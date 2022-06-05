import { useState } from "react";

import { Container } from "@mui/material";
//Interfaces
import { NavLink, setStateButtonInterface } from "../../interfaces";

//Components
import NavBar from "./Components/NavBar";
import MenuNavBar from "./Components/MenuNavBar";
import MenuGrid from "./Components/MenuGrid";
import AddToCart from "../AddToCart";
import Cart from "../Cart";

//Styles
import {
  Wrapper,
  HeroText,
  MenuContainer,
  HeaderContainer,
} from "./Menu.styles";

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
];

const Menu = () => {
  const [foodType, setFoodType] = useState("breakfast");

  const menuNavBar: setStateButtonInterface[] = [
    {
      setStateFunc: setFoodType,
      value: "breakfast",
      variant: "text",
      content: "Breakfast",
    },
    {
      setStateFunc: setFoodType,
      value: "beverages",
      variant: "text",
      content: "Coffee/Beverages",
    },
  ];
  return (
    <Wrapper disableGutters maxWidth={false}>
      <AddToCart />
      <Cart />
      <HeaderContainer disableGutters maxWidth={false}>
        <NavBar links={topNavBar} gap="3rem" fontSize="1.5rem" mTop="0" />
        <HeroText>OceanSide</HeroText>
        <MenuNavBar
          stateSetters={menuNavBar}
          gap="1rem"
          fontSize="1.25rem"
          mTop="1rems"
        />
      </HeaderContainer>

      <MenuContainer maxWidth={false}>
        <MenuGrid foodType={foodType} />
      </MenuContainer>
    </Wrapper>
  );
};

export default Menu;
