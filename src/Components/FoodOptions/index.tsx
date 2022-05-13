import { Stack } from "@mui/material";

//Interfaces
import { foodOptionInterface } from "../../interfaces";

import React from "react";

const foodOptions = ({
  options,
}: {
  options: foodOptionInterface[] | undefined;
}) => {
  return (
    <Stack>
      {options !== undefined ? (
        options.map((foodOption) => <div>{foodOption.optionName}</div>)
      ) : (
        <div>No options</div>
      )}
    </Stack>
  );
};

export default foodOptions;
