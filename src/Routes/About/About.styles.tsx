import { styled } from "@mui/system";

export const StyledImage = styled("img")`
  width: 100%;
  height: auto;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
