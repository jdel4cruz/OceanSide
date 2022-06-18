import { Fade, Stack, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

// Components
import Header from "../../Components/Header";
import ScrollButton from "../../Components/ScrollToTopButton";

// Styles
import { StyledImage } from "./About.styles";

import {
  aboutBody,
  aboutBody2,
  aboutBody3,
  aboutBody4,
  aboutClose,
} from "./Consts";

const About = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  console.log(showScrollButton);

  const onScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fade in={true} timeout={700}>
      <Stack>
        <ScrollButton isVisible={showScrollButton} scrollToTop={scrollToTop} />
        <Header />
        <Container
          sx={{
            backgroundColor: "white",
            p: { xs: "1rem 2rem", sm: "2rem 4rem", md: "1rem 2rem" },
            maxWidth: { md: "900px", lg: "1200px" },
          }}
        >
          <Stack sx={{ color: "#0000009e" }} alignItems="center">
            <Typography
              variant="h3"
              component="h1"
              mt="2rem"
              sx={{ alignSelf: { xs: "start", sm: "center" } }}
            >
              ABOUT
            </Typography>
            <Typography variant="h6" component="p" mt="1rem">
              {aboutBody}
            </Typography>
            <Container
              disableGutters
              maxWidth={false}
              sx={{
                position: "relative",
                width: { sm: "100%", md: "75%" },
                alignSelf: { sm: "", md: "end" },
                mt: "4rem",
                marginInline: "0",
              }}
            >
              <StyledImage src="/images/About/img1_test.jpg" />
              <Container
                disableGutters
                sx={{
                  position: { sm: "relative", md: "absolute" },
                  top: "0",
                  left: "0",
                  width: { md: "60%" },
                  height: "50%",
                  marginInline: "0",
                }}
              >
                <Typography
                  sx={{
                    backgroundColor: "#cfaf90",
                    color: "white",
                    position: "relative",
                    top: { sm: "0", md: "6rem" },
                    left: { sm: "0", md: "-6rem" },

                    p: "2rem",
                    fontSize: { md: "1.125rem", lg: "1.25rem" },
                  }}
                  variant="body1"
                  component="p"
                >
                  {aboutBody2}
                  <Typography
                    sx={{
                      backgroundColor: "#9eccd0",
                      color: "white",
                      position: "absolute",
                      top: "-3rem",
                      left: { xs: "3rem", sm: "1rem", md: "-3rem" },
                      p: "1rem",
                      fontSize: { md: "1.5rem", lg: "1.75rem" },
                    }}
                    variant="h6"
                    component="h2"
                  >
                    Game Plan
                  </Typography>
                </Typography>
              </Container>
            </Container>
            <Container
              disableGutters
              maxWidth={false}
              sx={{
                position: "relative",
                width: { sm: "100%", md: "85%" },

                mt: { xs: "4rem", md: "8rem" },
                marginInline: "0",
              }}
            >
              <StyledImage src="/images/About/img2_test.jpg" />
              <Container
                disableGutters
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: { sm: "relative", md: "absolute" },
                  top: "0",

                  marginInline: "0",
                }}
              >
                <Typography
                  sx={{
                    backgroundColor: "#cfaf90",
                    color: "white",
                    position: "relative",
                    width: { xs: "100%", md: "70%" },

                    top: { sm: "0", md: "-4rem" },
                    p: "2rem",
                    fontSize: { md: "1.125rem", lg: "1.25rem" },
                  }}
                  variant="body1"
                  component="p"
                >
                  {aboutBody3}
                  <Typography
                    sx={{
                      backgroundColor: "#9eccd0",
                      color: "white",
                      position: "absolute",
                      width: "fit-content",
                      top: "-3rem",
                      right: { xs: "50%", md: "3rem" },
                      transform: { xs: "translate(50%)", md: "translate(0)" },
                      p: "1rem",
                      fontSize: { md: "1.5rem", lg: "1.75rem" },
                    }}
                    variant="h6"
                    component="h2"
                  >
                    Unforseen Issues
                  </Typography>
                </Typography>
              </Container>
            </Container>
            <Container
              disableGutters
              maxWidth={false}
              sx={{
                position: "relative",
                width: { xs: "100%", md: "85%" },
                marginInline: "0",
                mt: { xs: "2rem", md: "8rem" },
                alignSelf: "start",
              }}
            >
              <StyledImage src="/images/About/img3_test.jpg" />
              <Container
                disableGutters
                sx={{
                  position: { sm: "relative", md: "absolute" },
                  top: "0",
                  display: "flex",
                  justifyContent: "end",

                  marginInline: "0",
                }}
              >
                <Typography
                  sx={{
                    backgroundColor: "#cfaf90",
                    color: "white",
                    position: "relative",
                    width: { md: "50%" },
                    top: { xs: "0", md: "-3rem" },
                    right: { xs: "0", md: "-3rem" },
                    p: "2rem",
                    fontSize: { md: "1.125rem", lg: "1.25rem" },
                  }}
                  variant="body1"
                  component="p"
                >
                  {aboutBody4}
                  <Typography
                    sx={{
                      backgroundColor: "#9eccd0",
                      color: "white",
                      position: "absolute",
                      bottom: "-3rem",
                      right: { xs: "3rem", sm: "1rem", md: "-3rem" },
                      p: "1rem",
                      fontSize: { md: "1.5rem", lg: "1.75rem" },
                    }}
                    variant="h6"
                    component="h2"
                  >
                    Closing Thoughts
                  </Typography>
                </Typography>
              </Container>
            </Container>
            <Typography
              variant="h6"
              component="p"
              sx={{ mt: { xs: "5rem", md: "3rem" } }}
            >
              {aboutClose}
            </Typography>
            <Typography variant="h6" component="p" m="2rem 0">
              Thanks for checking out my project and I hope you have a good day!
            </Typography>
          </Stack>
        </Container>
      </Stack>
    </Fade>
  );
};

export default About;
