import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useNavigate } from "react-router";

//Styles
import { StyledIconButton } from "./ReturnButton.styles";

const ReturnButton = ({ path }: { path: string }) => {
  const navigate = useNavigate();

  return (
    <StyledIconButton
      variant="contained"
      disableElevation
      onClick={() => navigate(path)}
    >
      <ArrowForwardIosRoundedIcon fontSize="inherit" htmlColor="#cfaf90" />
    </StyledIconButton>
  );
};

export default ReturnButton;
