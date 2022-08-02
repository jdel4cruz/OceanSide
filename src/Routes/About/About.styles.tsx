import { styled } from "@mui/system";

export const StyledImage = styled("img")`
  width: 100%;
  aspect-ratio: 4 / 3;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
