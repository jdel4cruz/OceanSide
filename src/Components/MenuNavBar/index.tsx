import { Button } from "@mui/material";

//Interfaces
import { setStateButtonInterface } from "../../interfaces";

//Styles
import { Wrapper } from "./MenuNavBar.styles";

const MenuNavBar = ({
  stateSetters,
  gap,
  fontSize,
  mTop,
}: {
  stateSetters: setStateButtonInterface[];
  gap: string;
  fontSize: string;
  mTop: string;
}) => {
  return (
    <Wrapper gap={gap} fontSize={fontSize} mTop={mTop}>
      {stateSetters.map((setter: setStateButtonInterface, i: number) => (
        <Button
          onClick={() => setter.setStateFunc(setter.value)}
          variant={setter.variant}
          color="inherit"
          key={i}
        >
          {setter.content}
        </Button>
      ))}
    </Wrapper>
  );
};

export default MenuNavBar;
