//Interfaces
import { NavLink } from "./interfaces";

//Components
import NavBar from "./Components/NavBar";
import MenuGrid from "./Components/MenuGrid";

//Styles
import { Wrapper, HeroText, MenuContainer } from "./App.styles";

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

const foodNavBar: NavLink[] = [
  {
    path: "/food/breakfast",
    color: "inherit",
    underline: "none",
    content: "Breakfast",
  },
  {
    path: "/food/other",
    color: "inherit",
    underline: "none",
    content: "Coffee/Beverages",
  },
];

function App() {
  return (
    <Wrapper disableGutters>
      <NavBar links={topNavBar} gap="3.5rem" fontSize="1.5rem" mTop="2rem" />
      <HeroText>OceanSide</HeroText>
      <NavBar links={foodNavBar} gap="1rem" fontSize="1rem" mTop="0" />
      <MenuContainer>
        <MenuGrid />
      </MenuContainer>
    </Wrapper>
  );
}

export default App;
