import { Card, CardHeader, Divider } from "@mui/material";
import { styled } from "@mui/system";

export const StyledCard = styled(Card)`
  border: 4px solid white;
  padding: 0.5rem;
`;

export const StyledHeader = styled(CardHeader)`
  padding: 0.5rem 0;
  padding-top: 0;

  .MuiCardHeader-title {
    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 133.4%;
  }
`;

export const ContentContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 30%;
  flex: 1 1 0;
  padding: 0;
  margin: 0;
`;

export const StyledContent = styled("div")`
  display: flex;
  padding: 0.5rem 0;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: #0000009e;
`;

export const StyledDivider = styled(Divider)`
  border: 2px solid #f7e4d4;
`;
