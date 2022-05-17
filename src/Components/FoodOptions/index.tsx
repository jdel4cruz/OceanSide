import { Stack, Typography } from "@mui/material";

//Components
import FoodOption from "../FoodOption";

//Styles
import { StyledStack } from "./FoodOptions.styles";

//Interfaces
import { foodOptionInterface } from "../../interfaces";

interface InitialOptions {
  [index: string]: boolean;
}

const foodOptions = ({
  options,
  setOptions,
}: {
  options: foodOptionInterface[] | undefined;
  setOptions: React.Dispatch<React.SetStateAction<InitialOptions>>;
}) => {
  return (
    <StyledStack spacing={1}>
      {options !== undefined ? (
        options.map((foodOption, i) => (
          <FoodOption option={foodOption} setOption={setOptions} key={i} />
        ))
      ) : (
        <div>No options</div>
      )}
    </StyledStack>
  );
};

export default foodOptions;
