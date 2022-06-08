import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Container)`
  display: flex;
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

  background-image: url(/images/background_img2.jpg);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
`;

export const MenuContainer = styled(Container)`
  width: fit-content;
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  flex: 1 1 0;

  background-color: #f6f0eb;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 1.5rem;
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
  margin-top: 2rem;

  font-family: "Rochester", cursive;
  font-size: 3rem;
  color: #ffffff;
`;
