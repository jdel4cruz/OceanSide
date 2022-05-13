import { Stack, Typography } from "@mui/material";

//Components
import FoodOption from "../FoodOption";

//Styles
import { StyledStack } from "./FoodOptions.styles";

//Interfaces
import { foodOptionInterface } from "../../interfaces";

const foodOptions = ({
  options,
}: {
  options: foodOptionInterface[] | undefined;
}) => {
  return (
    <StyledStack spacing={1}>
      {options !== undefined ? (
        options.map((foodOption, i) => (
          <FoodOption option={foodOption} key={i} />
        ))
      ) : (
        <div>No options</div>
      )}
    </StyledStack>
  );
};

export default foodOptions;
