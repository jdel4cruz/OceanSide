import React, { useState } from "react";
import {
  addHours,
  subMinutes,
  addMinutes,
  addDays,
  getDate,
  getMonth,
  getYear,
  lightFormat,
} from "date-fns";
import {
  Container,
  Paper,
  AppBar,
  IconButton,
  Button,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

//Interfaces
interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  [index: string]: string;
}

const initialPersonalInfo: PersonalInfo = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const Checkout = () => {
  const [isPickup, setIsPickup] = useState(true);
  const [orderNotes, setOrderNotes] = useState("N/A");
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
  console.log(orderNotes);
  console.log(personalInfo.firstName);

  const handlePersonalInfo = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const target = event.target;
    const value = target.value;
    const key = target.id;

    setPersonalInfo((prevInfo) => {
      const newInfo = { ...prevInfo };
      newInfo[key] = value;
      return newInfo;
    });
  };

  const currentDate = new Date();
  console.log(currentDate);
  const date = getDate(currentDate);
  const month = getMonth(currentDate);
  const year = getYear(currentDate);

  const openingTime = new Date(`${month + 1} ${date}, ${year} 08:00:00`);
  //   const closingTime = addHours(openingTime, 8);

  const pickupTime =
    currentDate <= subMinutes(addDays(openingTime, 1), 30)
      ? `${
          date === getDate(openingTime) ? "Tomorrow" : "Today"
        } at ${lightFormat(openingTime, "h:mm")}`
      : addMinutes(currentDate, 30);

  return (
    <Paper sx={{ height: "100vh", backgroundColor: "#f6f0eb" }}>
      <Stack spacing={0}>
        <AppBar sx={{ flexDirection: "row", p: "1rem" }}>
          <IconButton onClick={() => console.log("this isworking")}>
            <ArrowBackIosNewRoundedIcon />
            <Typography sx={{ ml: "1rem" }}>Checkout</Typography>
          </IconButton>
        </AppBar>

        <Container sx={{ p: ".25rem" }}>
          <Typography sx={{ mt: "8rem", ml: "1rem" }} variant="h5">
            Order Details
          </Typography>
          <Paper sx={{ p: "1rem", mt: "1rem" }}>
            <Stack direction="row" spacing={3}>
              <ShoppingBagTwoToneIcon />
              <Typography>Pickup</Typography>
              <Typography variant="subtitle2"> 164 Chardonnay Drive</Typography>
            </Stack>
            <Stack direction="row" spacing={3} sx={{ mt: "1rem" }}>
              <AccessTimeRoundedIcon />
              <Typography>{`${pickupTime}`}</Typography>
            </Stack>
            <TextField
              label="Order Notes"
              variant="standard"
              placeholder="Order Notes"
              sx={{ width: 1 }}
              onChange={(e) => setOrderNotes(e.target.value)}
            />
          </Paper>
        </Container>

        <Container sx={{ p: ".25rem" }}>
          <Typography sx={{ mt: "5rem", ml: "1rem" }} variant="h5">
            Personal Information
          </Typography>
          <Paper sx={{ p: "1rem", mt: "1rem" }}>
            <Stack spacing={2}>
              <TextField
                id="firstName"
                label="First name *"
                variant="standard"
                placeholder="First name"
                sx={{ width: 1 }}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  handlePersonalInfo(e)
                }
              ></TextField>
              <TextField
                id="lastName"
                label="Last name *"
                variant="standard"
                placeholder="Last name"
                sx={{ width: 1 }}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  handlePersonalInfo(e)
                }
              ></TextField>
              <TextField
                id="email"
                label="Email address *"
                variant="standard"
                placeholder="Email address"
                sx={{ width: 1 }}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  handlePersonalInfo(e)
                }
              ></TextField>
              <TextField
                id="phone"
                label="Phone number *"
                variant="standard"
                placeholder="Phone number"
                sx={{ width: 1 }}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  handlePersonalInfo(e)
                }
              ></TextField>
            </Stack>
          </Paper>
        </Container>
      </Stack>
    </Paper>
  );
};

export default Checkout;
