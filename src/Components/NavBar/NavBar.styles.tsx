import { Container } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Container)<{
  gap: string;
  fontSize: string;
  mTop: string;
}>`
  display: flex;
  justify-content: center;
  width: 90%;
  margin-top: ${(props) => (props.mTop ? props.mTop : "")};
  gap: ${(props) => (props.gap ? props.gap : "")};

  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-family: "Lato";
  color: #ffffff;
`;
