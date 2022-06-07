import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

export const StyledCard = styled(Card)`
  box-sizing: border-box;
  padding: 1rem;
  padding-left: 1.5rem;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    margin-block: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #cfaf90;
    border-radius: 100vw;
  }

  @media screen and (min-width: 400px) {
    width: 100%;
  }
`;

export const StyledHeader = styled(CardHeader)`
  padding: 0.5rem 0;
  span {
    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 133.4%;
  }
`;

export const StyledDivider = styled(Divider)`
  border: 2px solid #f7e4d4;
`;

export const StyledContent = styled(CardContent)`
  box-sizing: border-box;
  width: 100%;
  font-size: 0.75rem;
  color: #0000009e;
  padding: 1rem 0;
`;
export const Price = styled(Typography)`
  align-self: center;
`;

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
