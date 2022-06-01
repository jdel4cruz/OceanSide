import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: 100vh;

  background: linear-gradient(
    179.96deg,
    #72bfd6ac 0%,
    rgb(146, 228, 247) 4.66%,
    rgba(241, 189, 169, 0.514) 35%
  );
`;

export const MenuContainer = styled(Container)`
  flex-grow: 1;
  padding: 1.5rem 0;
  margin-top: 4rem;
  overflow: scroll;

  background: #f6f0eb;
`;

export const HeroText = styled(Typography)`
  margin-top: 2rem;

  font-family: "Rochester", cursive;
  font-size: 3rem;
  color: #ffffff;
`;
