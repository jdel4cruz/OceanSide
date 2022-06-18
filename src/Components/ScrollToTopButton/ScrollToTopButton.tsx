import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import { Fade } from "@mui/material";
import { StyledButton } from "./ScrollToTopButton.styles";
const ScrollToTopButton = ({
  scrollToTop,
  isVisible,
}: {
  scrollToTop: () => void;
  isVisible: boolean;
}) => {
  console.log(isVisible);
  return (
    <Fade in={isVisible} timeout={300}>
      <StyledButton isVisible={isVisible} onClick={scrollToTop}>
        <ExpandLessSharpIcon sx={{ fontSize: "3rem", color: "#0000006a" }} />
      </StyledButton>
    </Fade>
  );
};

export default ScrollToTopButton;
