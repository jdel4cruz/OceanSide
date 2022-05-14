import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useNavigate } from "react-router";

//Styles
import { StyledIconButton } from "./ReturnButton.styles";

const ReturnButton = () => {
  const navigate = useNavigate();

  return (
    <StyledIconButton
      variant="contained"
      disableElevation
      onClick={() => navigate(-1)}
    >
      <ArrowForwardIosRoundedIcon fontSize="inherit" htmlColor="#cfaf90" />
    </StyledIconButton>
  );
};

export default ReturnButton;
