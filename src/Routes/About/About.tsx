import { Box, Fade, Stack, Container, Typography } from "@mui/material";

// Components
import Header from "./Components/Header";

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
  return (
    <Fade in={true} timeout={700}>
      <Stack>
        <Header />
        <Box>
          <Container
            sx={{
              backgroundColor: "white",
              p: { sm: "2rem 4rem", md: "1rem 2rem" },
            }}
          >
            <Stack sx={{ color: "#0000009e" }}>
              <Typography variant="h3" component="h1" mt="2rem">
                ABOUT
              </Typography>
              <Typography
                sx={{ width: "85%" }}
                variant="h6"
                component="p"
                mt="1rem"
              >
                {aboutBody}
              </Typography>
              <Container
                disableGutters
                maxWidth={false}
                sx={{
                  position: "relative",
                  width: "75%",
                  alignSelf: "end",
                  mt: "4rem",
                  mr: "0",
                }}
              >
                <StyledImage src="/images/About/img1_test.jpg" />
                <Container
                  disableGutters
                  sx={{
                    position: "absolute",
                    top: "5%",
                    left: "-10rem",
                    width: "60%",
                    height: "50%",
                  }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "#cfaf90",
                      color: "white",
                      position: "relative",
                      top: "15%",
                      width: "100%",
                      p: "2rem",
                      // fontSize: { sm: "1rem", md: "1.5rem" },
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
                        left: "-2rem",
                        p: "1rem",
                        // fontSize: { sm: "1.25rem", md: "1.75rem" },
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
                  width: "85%",

                  mt: "12rem",
                }}
              >
                <StyledImage src="/images/About/img2_test.jpg" />
                <Container
                  disableGutters
                  sx={{
                    position: "absolute",
                    top: "-20%",
                    right: "50%",
                    transform: "translateX(50%)",
                    width: "70%",
                    height: "50%",
                  }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "#cfaf90",
                      color: "white",
                      position: "relative",
                      top: "5%",
                      width: "100%",
                      p: "2rem",
                      // fontSize: { sm: "1rem", md: "1.5rem" },
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
                        top: "-3rem",
                        right: "3rem",
                        p: "1rem",
                        // fontSize: { sm: "1.25rem", md: "1.75rem" },
                      }}
                      variant="h6"
                      component="h2"
                    >
                      Unforseen Issues
                    </Typography>
                  </Typography>
                </Container>
              </Container>
            </Stack>
          </Container>
        </Box>
      </Stack>
    </Fade>
  );
};

export default About;
