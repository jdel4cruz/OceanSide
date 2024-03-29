import { Checkbox, Stack, Typography } from "@mui/material";
import React from "react";

//Helper Functions
import { priceToString } from "../../../../../../HelperFunctions";

//Interfaces
import { foodOptionInterface } from "../../../../../../interfaces";
interface InitialOptions {
  [index: string]: boolean;
}

const FoodOption = ({
  option,
  setOption,
}: {
  option: foodOptionInterface;
  setOption: React.Dispatch<React.SetStateAction<InitialOptions>>;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption((prevOptions) => {
      const newOptions = { ...prevOptions };
      if (e.target.checked === true) {
        newOptions[option.optionName] = true;
      } else {
        delete newOptions[option.optionName];
      }
      return newOptions;
    });
  };

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        width={1}
      >
        <Typography>{option.optionName}</Typography>
        <Stack direction="row" alignItems="center">
          <Typography>
            {option.price
              ? `$${priceToString(option.price)}`
              : priceToString(option.price)}
          </Typography>
          <Checkbox onChange={handleChange} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FoodOption;
