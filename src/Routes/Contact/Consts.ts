import { InputProps } from "../../interfaces";

export const nameInformationProps: InputProps[] = [
  {
    id: "firstName",
    defaultValue: "",
    name: "firstName",
    type: "firstName",
    label: "First name",
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
    label: "Last name",
    variant: "standard",
    placeholder: "Last name",
    sx: { width: 1 },
    required: true,
  },
];

export const detailInformationProps: InputProps[] = [
  {
    id: "email",
    defaultValue: "",
    name: "email",
    type: "email",
    label: "Email",
    variant: "standard",
    placeholder: "Email",
    sx: { width: 1 },
    required: true,
  },
  {
    id: "subject",
    defaultValue: "",
    name: "subject",
    type: "subject",
    label: "Subject",
    variant: "standard",
    placeholder: "Subject",
    sx: { width: 1 },
    required: true,
  },
  {
    id: "message",
    defaultValue: "",
    name: "message",
    type: "message",
    label: "Message",
    variant: "outlined",
    placeholder: "Message",
    sx: { width: 1 },
    required: true,
    multiline: true,
    rows: "4",
  },
];

export const openHours = [
  "Closed",
  "8:00 AM - 4:00 PM",
  "8:00 AM - 4:00 PM",
  "8:00 AM - 4:00 PM",
  "8:00 AM - 4:00 PM",
  "8:00 AM - 4:00 PM",
  "Closed",
];

export const weekdays = [
  "Sunday: ",
  "Monday: ",
  "Tuesday: ",
  "Wednesday: ",
  "Thursday: ",
  "Friday: ",
  "Saturday: ",
];
