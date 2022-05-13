import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

//Styles
import { StyledIconButton } from "./ReturnButton.styles";

const ReturnButton = () => {
  return (
    <StyledIconButton>
      <ArrowForwardIosRoundedIcon fontSize="inherit" htmlColor="#cfaf90" />
    </StyledIconButton>
  );
};

export default ReturnButton;
