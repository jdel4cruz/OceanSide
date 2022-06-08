import { Card, CardHeader, CardContent, Divider } from "@mui/material";
import { styled } from "@mui/system";

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0.25rem;
  border-radius: 0.5rem;
  color: #0000009e;
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
  border: 2px solid #f6ede5;
`;

export const StyledContent = styled(CardContent)`
  font-size: 0.75rem;
`;
