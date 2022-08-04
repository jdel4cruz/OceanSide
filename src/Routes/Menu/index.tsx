import { useState } from "react";

import { Container, Fade } from "@mui/material";
//Interfaces
import { NavLink, setStateButtonInterface } from "../../interfaces";

//Components
import NavBar from "./Components/NavBar";
import MenuNavBar from "./Components/MenuNavBar";
import MenuGrid from "./Components/MenuGrid";
import AddToCart from "./Components/AddToCart";
import Cart from "./Components/Cart";

//Styles
import {
  Wrapper,
  HeroText,
  HeroLink,
  MenuContainer,
  HeaderContainer,
} from "./Menu.styles";

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
    <Fade in={true} timeout={700}>
      <Wrapper disableGutters maxWidth={false}>
        <AddToCart />
        <Cart />
        <HeaderContainer disableGutters maxWidth={false}>
          <NavBar />
          <HeroLink to={"/"}>
            <HeroText>OceanSide</HeroText>
          </HeroLink>

          <MenuNavBar stateSetters={menuNavBar} foodType={foodType} />
        </HeaderContainer>

        <MenuContainer maxWidth={false} disableGutters>
          <MenuGrid foodType={foodType} />
        </MenuContainer>
      </Wrapper>
    </Fade>
  );
};

export default Menu;
