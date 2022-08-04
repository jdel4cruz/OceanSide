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
  Stack,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { useNavigate } from "react-router";

//Components
import UserInput from "../../Components/UserInput";
import TipButtonGroup from "./Components/TipButtonGroup";
import CheckoutSummary from "./Components/CheckoutSummary";

//Styles
import { StyledButton, StyledForm } from "./Checkout.styles";

//HelperFunctions
import { priceToString, priceToNumber } from "../../HelperFunctions";

//API
import { fetchStripeCheckoutUrl } from "../../API";

//Interfaces
import { RootState } from "../../Redux/store";
import { IFormInputs } from "../../interfaces";

//Consts
import { personalInformationProps, orderNotesInputProps } from "./Consts";

const Checkout = () => {
  const { tax, total, cart } = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  const methods = useForm<IFormInputs>({
    defaultValues: {
      cart,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      orderNotes: "",
      tips: "",
      tax: priceToString(Math.round(total * tax)),
      total: priceToString(total),
    },
  });

  const handleOnSubmit: SubmitHandler<IFormInputs> = async (
    data: IFormInputs
  ) => {
    console.log(data);

    const response = await fetchStripeCheckoutUrl(data);
    try {
      console.log(response);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const { url } = await response.json();
      window.location.replace(url);
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  };

  if (cart.length === 0) {
    return (
      <>
        <div>There are no cart items!</div>
        <StyledButton
          size="large"
          disableElevation
          variant="contained"
          onClick={() => {
            navigate(`/`);
          }}
        >
          Return to menu
        </StyledButton>
      </>
    );
  }

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
    <Paper
      sx={{
        backgroundColor: "#f6f0eb",
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <FormProvider {...methods}>
        <StyledForm onSubmit={methods.handleSubmit(handleOnSubmit)}>
          <Stack spacing={0} sx={{ pb: "3rem" }} alignItems="center">
            <AppBar
              sx={{
                flexDirection: "row",
                p: "1rem",
                backgroundColor: "#a7e2e7",
              }}
            >
              <IconButton
                onClick={() => navigate("/")}
                sx={{
                  pr: "0",
                  "&.MuiButtonBase-root:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <ArrowBackIosNewRoundedIcon />
                <Typography sx={{ ml: "1rem" }} variant="h4">
                  Checkout
                </Typography>
              </IconButton>
            </AppBar>

            <Container sx={{ p: ".25rem", mt: "8rem" }}>
              <Typography sx={{ ml: "1rem" }} variant="h5">
                Order Details
              </Typography>
              <Paper sx={{ p: "1rem", mt: "1rem" }}>
                <Stack direction="row" spacing={3}>
                  <ShoppingBagTwoToneIcon />
                  <Typography>Pickup</Typography>
                  <Typography variant="subtitle2">
                    164 Chardonnay Drive
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={3} sx={{ mt: "1rem" }}>
                  <AccessTimeRoundedIcon />
                  <Typography>{`${pickupTime}`}</Typography>
                </Stack>
                <UserInput {...orderNotesInputProps} />
              </Paper>
            </Container>

            <Container sx={{ p: ".25rem", mt: "3rem" }}>
              <Typography sx={{ ml: "1rem" }} variant="h5">
                Personal Information
              </Typography>
              <Paper sx={{ p: "1rem", mt: "1rem" }}>
                <Stack spacing={2}>
                  {personalInformationProps.map((inputProps, i) => (
                    <UserInput {...inputProps} key={i} />
                  ))}
                </Stack>
              </Paper>
            </Container>

            <Container sx={{ p: ".25rem", mt: "3rem" }}>
              <Typography sx={{ ml: "1rem" }} variant="h5">
                Tips
              </Typography>
              <Paper sx={{ p: "1rem", mt: "1rem" }}>
                <TipButtonGroup name="tips" />
              </Paper>
            </Container>

            <CheckoutSummary
              tax={tax}
              total={priceToNumber(methods.getValues("total"))}
              tips={priceToNumber(methods.getValues("tips"))}
            />
          </Stack>
        </StyledForm>
      </FormProvider>
    </Paper>
  );
};

export default Checkout;
