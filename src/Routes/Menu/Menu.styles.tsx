import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Container)`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  padding-bottom: 1.5rem;
  background-color: #f6f0eb;
`;

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

export const MenuContainer = styled(Container)`
  width: fit-content;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-left: 1rem;
  flex: 1 1 0;

  background-color: #f6f0eb;

  overflow-y: scroll;

  @media screen and (min-width: 600px) {
    padding: 1.5rem;
    padding-left: 2.5rem;

    ::-webkit-scrollbar {
      width: 1.5rem;
    }
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }
  ::-webkit-scrollbar-track {
    margin-block: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #9eccd0;
    border: 0.25rem solid #f6f0eb;
    border-radius: 100vw;
  }
`;

export const HeroText = styled(Typography)`
  font-family: "Rochester", cursive;
  font-size: 3rem;
  margin-top: 3rem;

  color: #ffffff;
`;
