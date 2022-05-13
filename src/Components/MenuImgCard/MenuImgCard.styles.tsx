import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

export const StyledCard = styled(Card)`
  margin-top: 0.25rem;
  border: 4px solid white;
  padding: 0.5rem;
`;

export const StyledHeader = styled(CardHeader)`
  padding: 0.5rem 1rem;
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
  font-size: 0.75rem;
  color: #0000009e;
`;
export const Price = styled(Typography)`
  align-self: start;
`;
