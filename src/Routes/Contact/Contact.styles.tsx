import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledImage = styled(`img`)`
  width: 100%;
  height: auto;
`;

export const StyledForm = styled("form")`
  display: flex;
  justify-content: center;
  width: 80%;
  padding-bottom: 3rem;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const StyledButton = styled(Button)`
  height: 4rem;
  margin-top: 1rem;
  align-self: start;
  padding: 0 3rem;

  border-radius: 0.5rem;

  background-color: #cfaf90;
  color: white;

  :hover {
    background-color: #b9926c;
  }
`;
