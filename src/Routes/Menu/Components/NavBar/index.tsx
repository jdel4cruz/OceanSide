import {
  Badge,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { updateIsCartOpen } from "../../../../Redux/Reducers/cartReducer";
import { RootState } from "../../../../Redux/store";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";

//Interfaces
import { NavLink } from "../../../../interfaces";

//Styles
import { StyledLink, StyledListItem, Wrapper } from "./NavBar.styles";

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

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useSelector((state: RootState) => state.cart);
  let cartQty = 0;
  cart.forEach((cartItem) => (cartQty += cartItem.qty));
  console.log(isOpen);
  console.log(location);

  return (
    <Stack
      direction="row"
      spacing={{ sm: 4, md: 7, lg: 10 }}
      alignItems="center"
    >
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
      <IconButton
        onClick={() => dispatch(updateIsCartOpen({ isOpen: true }))}
        sx={{
          position: "absolute",
          top: "1rem",
          right: "1.5rem",
          p: "0",
          display: { sm: "none" },
        }}
      >
        <Badge
          badgeContent={cartQty}
          color="info"
          sx={{ "& .MuiBadge-badge": { top: ".5rem", right: "0.5rem" } }}
        >
          <ShoppingBagRoundedIcon
            sx={{
              color: "white",
              fontSize: "4rem",
            }}
          />
        </Badge>
      </IconButton>
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
      <IconButton
        onClick={() => dispatch(updateIsCartOpen({ isOpen: true }))}
        sx={{
          display: { xs: "none", sm: "inline-flex" },
          "&.MuiButtonBase-root:hover": {
            backgroundColor: "transparent",
          },
        }}
        key="cart"
      >
        <Typography sx={{ color: "white", fontSize: "2rem", mr: "1rem" }}>
          Cart
        </Typography>
        <Badge badgeContent={cartQty} color="info">
          <ShoppingBagRoundedIcon sx={{ color: "white", fontSize: "2rem" }} />
        </Badge>
      </IconButton>
    </Stack>
  );
};

export default NavBar;
