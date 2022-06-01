import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: 100vh;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;

  background: linear-gradient(
    179.96deg,
    #72bfd6ac 2%,
    rgba(146, 229, 247, 0.74) 25%,
    rgba(241, 189, 169, 0.514) 105%
  );
`;

export const MenuContainer = styled(Container)`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  overflow: scroll;

  background: #f6f0eb;
`;

export const HeroText = styled(Typography)`
  margin-top: 2rem;

  font-family: "Rochester", cursive;
  font-size: 3rem;
  color: #ffffff;
`;
