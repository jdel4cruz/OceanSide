interface InputProps {
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

export const personalInformationProps: InputProps[] = [
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
    id: "phone",
    defaultValue: "",
    name: "phone",
    type: "phone",
    label: "Phone",
    variant: "standard",
    placeholder: "Phone",
    sx: { width: 1 },
    required: true,
  },
];

export const orderNotesInputProps: InputProps = {
  name: "orderNotes",
  defaultValue: "",
  variant: "standard",
  type: "orderNotes",
  label: "Order Notes",
  id: "orderNotes",
  placeholder: "Please specify any additional order notes",
  sx: { width: 1 },
  required: false,
};
