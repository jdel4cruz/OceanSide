import { Stack } from "@mui/material";
import { styled } from "@mui/system";

export const StyledStack = styled(Stack)<{ isLoading: boolean }>(
  ({ isLoading }) => `
  visibility: ${isLoading ? "hidden" : "visible"};
`
);

export const StyledImage = styled("img")`
  width: 100%;
  aspect-ratio: 4 / 3;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
