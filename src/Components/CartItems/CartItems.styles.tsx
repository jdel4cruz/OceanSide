import { Stack, Button } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Stack)``;

export const CartStack = styled(Stack)``;

export const NoCartItems = styled(Stack)`
  width: 100%;
  flex: 1 1 0;
  background: white;
`;

export const StyledButton = styled(Button)`
  width: 90%;
  height: 4rem;
  margin-top: 1rem;

  border-radius: 0.5rem;
  background: #cfaf90;

  border: 1px solid;
  color: white;
  font-weight: 500;

  :hover {
    background: white;
    border: none;
    color: #cfaf90;
  }
`;
