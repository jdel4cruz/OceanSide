import { Button, Stack } from "@mui/material";

//Interfaces
import { setStateButtonInterface } from "../../../../interfaces";

// Styles
import { StyledMenuText } from "./MenuNavBar.styles";

const MenuNavBar = ({
  stateSetters,
  foodType,
}: {
  stateSetters: setStateButtonInterface[];
  foodType: string;
}) => {
  return (
    <Stack direction="row">
      {stateSetters.map((setter: setStateButtonInterface, i: number) => (
        <Button
          onClick={() => setter.setStateFunc(setter.value)}
          variant={setter.variant}
          key={i}
        >
          <StyledMenuText
            currentType={foodType}
            value={setter.value}
            sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
          >
            {setter.content}
          </StyledMenuText>
        </Button>
      ))}
    </Stack>
  );
};

export default MenuNavBar;
