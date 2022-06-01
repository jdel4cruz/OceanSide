import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledButton = styled(Button)`
  width: 100%;
  height: 4rem;
  margin-top: 1rem;

  border-radius: 0.5rem;

  background-color: #cfaf90;
  color: white;

  :hover {
    background-color: #b9926c;
  }
`;
