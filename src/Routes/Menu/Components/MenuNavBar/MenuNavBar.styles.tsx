import { Container } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Container, {
  shouldForwardProp: (prop) => prop !== "mTop",
})<{
  gap: string;
  mTop: string;
}>`
  display: flex;
  justify-content: center;
  width: 90%;
  margin-top: ${(props) => (props.mTop ? props.mTop : "")};
  gap: ${(props) => (props.gap ? props.gap : "")};

  color: #ffffff;
`;
