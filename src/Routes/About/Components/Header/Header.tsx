import { Stack } from "@mui/material";
import { useLocation } from "react-router";

// Styles
import { HeaderContainer, HeroText, StyledLink } from "./Header.styles";

// Interfaces
import { NavLink } from "../../../../interfaces";

const links: NavLink[] = [
  {
    path: "/",
    color: "inherit",
    underline: "none",
    content: "Home",
  },
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

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer disableGutters maxWidth={false}>
      <Stack
        direction="row"
        spacing={{ sm: 4, md: 7, lg: 12 }}
        alignItems="center"
      >
        {links.map((link: NavLink, i: number) => (
          <StyledLink
            to={link.path}
            key={i}
            current={location.pathname}
            path={link.path}
          >
            {link.content}
          </StyledLink>
        ))}
      </Stack>
      <HeroText>OceanSide</HeroText>
    </HeaderContainer>
  );
};

export default Header;
