import { Modal, CircularProgress, Paper, Typography } from "@mui/material";

const ProgressModal = ({
  isOpen,
  isLoading,
}: {
  isOpen: boolean;
  isLoading: boolean;
}) => {
  return (
    <Modal
      open={isOpen}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          p: "2rem",
        }}
      >
        <CircularProgress
          value={isLoading ? 0 : 100}
          variant={isLoading ? "indeterminate" : "determinate"}
        />
        <Typography variant="h6">
          {isLoading ? "Processing payment information" : "Rerouting!"}
        </Typography>
      </Paper>
    </Modal>
  );
};

export default ProgressModal;
