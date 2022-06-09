import { Badge, IconButton, Typography } from "@mui/material";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import { useSelector, useDispatch } from "react-redux";
import { updateIsCartOpen } from "../../../../Redux/Reducers/cartReducer";
import { RootState } from "../../../../Redux/store";

//Interfaces
import { NavLink } from "../../../../interfaces";

//Styles
import { StyledLink, Wrapper } from "./NavBar.styles";

const NavBar = ({
  links,
  gap,
  fontSize,
  mTop,
}: {
  links: NavLink[];
  gap: string;
  fontSize: string;
  mTop: string;
}) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);
  let cartQty = 0;
  cart.forEach((cartItem) => (cartQty += cartItem.qty));

  return (
    <Wrapper gap={gap} fontSize={fontSize} mTop={mTop}>
      {links.map((link: NavLink, i: number) => (
        <StyledLink to={link.path} key={i}>
          {link.content}
        </StyledLink>
      ))}
      <IconButton
        onClick={() => dispatch(updateIsCartOpen({ isOpen: true }))}
        sx={{
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
    </Wrapper>
  );
};

export default NavBar;
