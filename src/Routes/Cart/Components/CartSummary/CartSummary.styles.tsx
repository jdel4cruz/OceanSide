import { Button, Divider } from "@mui/material";
import { styled } from "@mui/system";

export const StyledButton = styled(Button)`
  width: 100%;
  height: 4rem;
  border-radius: 0.5rem;
  background: #cfaf90;

  border: 1px solid;
  color: white;
  font-weight: 500;

  :hover {
    background: white;
    border: 1px solid #cfaf90;
    color: #cfaf90;
  }
`;

export const StyledDivider = styled(Divider)`
  border: 2px solid #f7e4d4;
  margin: 1rem 0;
`;
