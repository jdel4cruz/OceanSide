import { Container, Typography } from "@mui/material";
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

export const StyledMenuText = styled(Typography)<{
  currentType: string;
  value: string;
}>`
  color: #ffffff;
  text-decoration: ${(props) =>
    props.currentType === props.value ? "underline" : "none"};
  text-underline-position: under;
`;
