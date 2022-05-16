import { Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const StyledHeader = styled(Typography)`
  padding: 0.5rem 1rem;
  /* font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 133.4%; */
`;

export const StyledDivider = styled(Divider)`
  border: 2px solid #f7e4d4;
`;

export const Price = styled(Typography)`
  align-self: start;
`;
