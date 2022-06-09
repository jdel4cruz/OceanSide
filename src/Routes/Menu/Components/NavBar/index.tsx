import { Badge, Container, IconButton, Stack, Typography } from "@mui/material";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { updateIsCartOpen } from "../../../../Redux/Reducers/cartReducer";
import { RootState } from "../../../../Redux/store";
import { useState } from "react";

//Interfaces
import { NavLink } from "../../../../interfaces";

//Styles
import { StyledLink, Wrapper } from "./NavBar.styles";

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
  const [isOpen, setIsOpen] = useState();
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);
  let cartQty = 0;
  cart.forEach((cartItem) => (cartQty += cartItem.qty));

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <IconButton
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
        sx={{
          position: "absolute",
          top: "1rem",
          right: "1.5rem",
          p: "0",
          display: { sm: "none" },
        }}
      >
        <ShoppingBagRoundedIcon
          sx={{
            color: "white",
            fontSize: "4rem",
          }}
        />
      </IconButton>
      {links.map((link: NavLink, i: number) => (
        <StyledLink to={link.path} key={i}>
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
      >
        <Typography sx={{ color: "white", fontSize: "1.5rem", mr: "1rem" }}>
          Cart
        </Typography>
        <Badge badgeContent={cartQty} color="info">
          <ShoppingBagRoundedIcon sx={{ color: "white" }} />
        </Badge>
      </IconButton>
    </Stack>
  );
};

export default NavBar;
