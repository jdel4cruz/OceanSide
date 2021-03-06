import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledButton = styled(Button)`
  min-width: 100%;
  height: 4rem;

  border-radius: 0.5rem;
  background: white;

  border: 1px solid #cfaf90;
  color: #cfaf90;
  font-weight: 500;

  :hover {
    background: #cfaf90;
    border: none;
    color: white;
  }
`;
