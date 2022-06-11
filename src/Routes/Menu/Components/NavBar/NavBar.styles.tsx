import { Container, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

export const Wrapper = styled(Container, {
  shouldForwardProp: (prop) => prop !== "mTop",
})<{
  gap: string;
  fontSize: string;
  mTop: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-top: ${(props) => (props.mTop ? props.mTop : "")};
  gap: ${(props) => (props.gap ? props.gap : "")};

  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};

  color: #ffffff;
`;

export const StyledLink = styled(Link)<{
  current: string;
  path: string;
}>`
  font-family: Lato, Roboto, sans-serif;
  padding-block: 0.5rem;
  font-size: 2rem;
  color: #ffffff;
  text-decoration: ${(props) =>
    props.current === props.path ? "underline" : "none"};

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const StyledListItem = styled(ListItem)<{
  current: string;
  path: string;
}>`
  background-color: ${(props) =>
    props.current === props.path ? "#beedf1" : ""};
`;
