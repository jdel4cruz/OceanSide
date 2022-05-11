import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  background: linear-gradient(
    179.96deg,
    #82aab4 0.04%,
    rgba(77, 185, 210, 0.604167) 24.95%,
    rgba(210, 174, 82, 0) 51.29%
  );
`;

export const HeroText = styled(Typography)`
  margin-top: 3rem;

  font-family: "Rochester", cursive;
  font-size: 3rem;
  color: #ffffff;
`;
