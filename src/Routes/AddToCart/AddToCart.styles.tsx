import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Container)`
  display: flex;
  max-height: 90vh;
  max-width: 90vw;
  flex-direction: column;
  align-items: center;

  margin: 0;
  padding: 0;

  @media screen and (min-width: 400px) {
    width: 400px;
  }
`;

/* export const HeroText = styled(Typography)`
  margin-top: 3rem;

  font-family: "Rochester", cursive;
  font-size: 3rem;
  color: #ffffff;
`; */
