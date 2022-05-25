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
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
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

//Components
import UserInput from "./UserInput";

//Interfaces
interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  [index: string]: string;
}

interface PersonalInputProps {
  name: string;
  defaultValue: string;
  variant: "standard" | "filled" | "outlined" | undefined;
  type: string;
  label: string;
  id: string;
  placeholder: string;
  sx: { width: number };
  required: boolean;
}

const personalInformationProps: PersonalInputProps[] = [
  {
    id: "firstName",
    defaultValue: "",
    name: "firstName",
    type: "firstName",
    label: "First name *",
    variant: "standard",
    placeholder: "First name",
    sx: { width: 1 },
    required: true,
  },
  {
    id: "lastName",
    defaultValue: "",
    name: "lastName",
    type: "lastName",
    label: "Last name *",
    variant: "standard",
    placeholder: "Last name",
    sx: { width: 1 },
    required: true,
  },
  {
    id: "email",
    defaultValue: "",
    name: "email",
    type: "email",
    label: "Email *",
    variant: "standard",
    placeholder: "Email",
    sx: { width: 1 },
    required: true,
  },
  {
    id: "phone",
    defaultValue: "",
    name: "phone",
    type: "phone",
    label: "Phone *",
    variant: "standard",
    placeholder: "Phone",
    sx: { width: 1 },
    required: true,
  },
];

const Checkout = () => {
  const [orderNotes, setOrderNotes] = useState("N/A");

  const methods = useForm<PersonalInfo>();

  const handleOnSubmit: SubmitHandler<PersonalInfo> = (data: PersonalInfo) => {
    console.log(data);
  };

  const currentDate = new Date();
  const date = getDate(currentDate);
  const month = getMonth(currentDate);
  const year = getYear(currentDate);

  const openingTime = new Date(`${month + 1} ${date}, ${year} 08:00:00`);
  const closingTime = addHours(openingTime, 8);

  let pickupTime = `Today at ${lightFormat(
    addMinutes(currentDate, 30),
    "h:mm"
  )}`;
  if (currentDate >= subMinutes(closingTime, 30)) {
    pickupTime = `Tomorrow at ${lightFormat(addDays(openingTime, 1), "h:mm")}`;
  }
  if (currentDate <= openingTime) {
    pickupTime = `today at ${lightFormat(openingTime, "h:mm")}`;
  }

  return (
    <Paper sx={{ height: "100vh", backgroundColor: "#f6f0eb" }}>
      <Stack spacing={0}>
        <AppBar sx={{ flexDirection: "row", p: "1rem" }}>
          <IconButton onClick={() => console.log("this isworking")}>
            <ArrowBackIosNewRoundedIcon />
            <Typography sx={{ ml: "1rem" }} variant="h4">
              Checkout
            </Typography>
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
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
                <Stack spacing={2}>
                  {personalInformationProps.map((inputProps, i) => (
                    <UserInput {...inputProps} key={i} />
                  ))}
                  <Button type="submit" variant="contained">
                    Submit
                  </Button>
                </Stack>
              </form>
            </FormProvider>
          </Paper>
        </Container>
      </Stack>
    </Paper>
  );
};

export default Checkout;
