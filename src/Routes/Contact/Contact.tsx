import {
  Box,
  List,
  ListItem,
  ListItemText,
  Fade,
  Stack,
  Container,
  Typography,
} from "@mui/material";
import { getDay } from "date-fns";

// Components
import Header from "../../Components/Header";

// Styles
import { StyledImage } from "./Contact.styles";

const currentDate = new Date();
const currentDay = getDay(currentDate);
const openHours = [
  "Closed",
  "8:00 AM - 4:00 PM",
  "8:00 AM - 4:00 PM",
  "8:00 AM - 4:00 PM",
  "8:00 AM - 4:00 PM",
  "8:00 AM - 4:00 PM",
  "Closed",
];
const weekdays = [
  "Sunday: ",
  "Monday: ",
  "Tuesday: ",
  "Wednesday: ",
  "Thursday: ",
  "Friday: ",
  "Saturday: ",
];

const Contact = () => {
  console.log(currentDate);
  console.log(currentDay);
  return (
    <Fade in={true} timeout={700}>
      <Box sx={{ color: "#0000009e" }}>
        <Header />
        <Stack sx={{ pt: "3rem" }} alignItems="center">
          <Stack direction="row" justifyContent="space-between">
            <List sx={{ width: "50%" }}>
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
        </Stack>
      </Box>
    </Fade>
  );
};

export default Contact;
