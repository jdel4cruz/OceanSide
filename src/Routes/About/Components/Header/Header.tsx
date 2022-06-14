import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

// Styles
import {
  HeaderContainer,
  HeroText,
  StyledLink,
  StyledListItem,
} from "./Header.styles";

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
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <HeaderContainer disableGutters maxWidth={false}>
      <IconButton
        onClick={() => setIsOpen(true)}
        sx={{
          position: "absolute",
          top: "1rem",
          left: "1.5rem",
          p: "0",
          display: { sm: "none" },
        }}
      >
        <MenuIcon
          sx={{
            color: "white",
            fontSize: "4rem",
          }}
        />
      </IconButton>
      <Drawer
        anchor="top"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{ display: { sm: "none" } }}
      >
        <List disablePadding>
          {links.map((link, i) => (
            <React.Fragment key={i}>
              <StyledListItem current={location.pathname} path={link.path}>
                <ListItemButton
                  onClick={() => {
                    navigate(link.path);
                    setIsOpen(false);
                  }}
                >
                  <ListItemText>{link.content}</ListItemText>
                </ListItemButton>
              </StyledListItem>
              {i < links.length - 1 ? <Divider /> : ""}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
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
