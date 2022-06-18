import { IconButton } from "@mui/material";
import { styled } from "@mui/system";

export const StyledButton = styled(IconButton)<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "inline-block" : "none")};
  z-index: 99999;
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  border-radius: 0;

  background-color: #0000002f;
`;
