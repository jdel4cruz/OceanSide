import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledIconButton = styled(Button)`
  align-self: end;
  width: 50px;
  height: 50px;
  margin-top: 1rem;

  background: white;
  font-size: 3rem;

  :hover {
    background: #cfaf90;
    svg {
      color: white;
    }
  }
`;
