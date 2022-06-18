import {
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Fade,
  Stack,
  Typography,
} from "@mui/material";
import { getDay } from "date-fns";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useState, useRef, useEffect } from "react";

// API
import { fetchFormSpree } from "../../API";

// Components
import Header from "../../Components/Header";
import UserInput from "../../Components/UserInput";

// Styles
import { StyledButton, StyledForm, StyledImage } from "./Contact.styles";

//Interfaces
import { IContactFormInputs } from "../../interfaces";

//Consts
import {
  openHours,
  weekdays,
  nameInformationProps,
  detailInformationProps,
} from "./Consts";

const currentDate = new Date();
const currentDay = getDay(currentDate);

const Contact = () => {
  const [query, setQuery] = useState("idle");
  const timerRef = useRef<number>();

  useEffect(() => {
    clearTimeout(timerRef.current);
  }, []);

  const methods = useForm<IContactFormInputs>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleOnSubmit: SubmitHandler<IContactFormInputs> = async (
    data: IContactFormInputs
  ) => {
    setQuery("progress");
    const response = await fetchFormSpree(data);
    try {
      console.log(response);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      console.log("submission was successful");

      timerRef.current = window.setTimeout(() => {
        setQuery("success");
      }, 1000);
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  };

  return (
    <Fade in={true} timeout={700}>
      <Box sx={{ color: "#0000009e" }}>
        <Header />
        <Stack sx={{ pt: "3rem" }} alignItems="center" spacing={6}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            sx={{ width: { xs: "90%", sm: "80%" } }}
          >
            <List sx={{ width: { xs: "90%", sm: "50%" } }}>
              <Typography variant="h4" component="h1" sx={{ m: "1rem" }}>
                Contact Information:
              </Typography>
              <ListItem>
                <ListItemText>
                  <Typography variant="body1" component="p">
                    Phone: (360-268-0374)
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography variant="body1" component="p">
                    Address: 164 Chardonnay Drive Westport, WA 98595
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography variant="body1" component="p">
                    {`Today: ${openHours[currentDay]}`}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <StyledImage src="/images/contact/fake_map2.png" />
              </ListItem>
            </List>
            <List>
              <>
                <Typography variant="h4" component="h1" sx={{ m: "1rem" }}>
                  Hours:
                </Typography>
                {openHours.map((day, i) => (
                  <ListItem key={i}>
                    <ListItemText>{`${weekdays[i]}${day}`}</ListItemText>
                  </ListItem>
                ))}
              </>
            </List>
          </Stack>

          <StyledForm onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <FormProvider {...methods}>
              <Stack spacing={4}>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ alignSelf: "start" }}
                >
                  If you have any questions or comments please let us know!
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 4, sm: 6 }}
                >
                  {nameInformationProps.map((element, i) => (
                    <UserInput {...element} key={i} />
                  ))}
                </Stack>
                {detailInformationProps.map((element, i) => (
                  <UserInput {...element} key={i} />
                ))}
                <Stack direction="row" alignItems="center" spacing={4}>
                  <StyledButton size="large" disableElevation type="submit">
                    Submit
                  </StyledButton>
                  <Box>
                    {query === "success" ? (
                      <Typography variant="body2" component="p">
                        Thank you for the submission! We will respond shortly!
                      </Typography>
                    ) : (
                      <Fade in={query === "progress"} timeout={500}>
                        <CircularProgress />
                      </Fade>
                    )}
                  </Box>
                </Stack>
              </Stack>
            </FormProvider>
          </StyledForm>
        </Stack>
      </Box>
    </Fade>
  );
};

export default Contact;
