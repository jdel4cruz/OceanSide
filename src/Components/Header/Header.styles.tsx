import { Container, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;

  background-image: url(/images/background_img6.jpg);
  background-repeat: no-repeat;
  background-position: 50% 58%;
  background-size: cover;

  @media screen and (min-width: 600px) {
    background-position: 50% 40%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.01)),
      url(/images/background_img6.jpg);
  }
`;

export const HeroText = styled(Typography)`
  font-family: "Rochester", cursive;
  font-size: 4rem;
  margin-top: 1rem;

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
  text-underline-position: under;

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
