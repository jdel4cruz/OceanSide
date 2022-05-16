import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(
    179.96deg,
    #82aab4 0.04%,
    rgba(77, 185, 210, 0.604167) 25%,
    rgba(210, 174, 82, 0) 50%
  );
`;

export const MenuContainer = styled(Container)`
  flex-grow: 1;
  padding: 1.5rem 0;
  margin-top: 6rem;
  border: 3px solid white;
  background: #f6f0eb;
`;

export const HeroText = styled(Typography)`
  margin-top: 3rem;

  font-family: "Rochester", cursive;
  font-size: 3rem;
  color: #ffffff;
`;
