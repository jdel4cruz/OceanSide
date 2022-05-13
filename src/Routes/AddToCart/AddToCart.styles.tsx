import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 1.5rem;

  background: #9eccd0;
`;

export const MenuContainer = styled(Container)`
  flex-grow: 1;
  padding: 1.5rem;
  margin-top: 6rem;
  /* border: 3px solid white; */
  background: #f6f0eb;
`;

/* export const HeroText = styled(Typography)`
  margin-top: 3rem;

  font-family: "Rochester", cursive;
  font-size: 3rem;
  color: #ffffff;
`; */
