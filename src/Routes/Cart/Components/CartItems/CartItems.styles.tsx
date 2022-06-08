import { Stack, Button } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Stack)`
  width: 100%;
  flex: 1 1 auto;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
    border: 0.25rem solid #9eccd0;
    background: #cfaf90;
    border-radius: 100vw;
  }
`;

export const CartStack = styled(Stack)``;

export const NoCartItems = styled(Stack)`
  width: 90%;
  flex: 1 1 0;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-right: 1rem;
  background: white;
`;

export const StyledButton = styled(Button)`
  width: 90%;
  height: 4rem;
  margin-top: 1rem;

  border-radius: 0.5rem;
  background-color: #cfaf90;

  border: 1px solid;
  color: white;
  font-weight: 500;

  :hover {
    background-color: #b9926c;
  }
`;
