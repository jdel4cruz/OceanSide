import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledButton = styled(Button)`
  width: 90%;
  height: 4rem;
  margin-top: 1rem;

  border-radius: 0.5rem;

  background-color: #cfaf90;

  :hover {
    background-color: #b9926c;
  }
`;

export const StyledForm = styled("form")`
  width: 90%;

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
