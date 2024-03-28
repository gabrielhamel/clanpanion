import { Box, Popper, styled, TextField } from "@mui/material";

export const ClanOption = styled("li")({
  margin: 0,
  padding: 0,
});

export const ClanDetailLineContainer = styled(Box)({
  display: "flex",
  gap: "0.6rem",
});

export const ClanEmblemContainer = styled(Box)({
  alignItems: "center",
  display: "flex",
});

export const StyledPopper = styled(Popper)({
  "& .MuiPaper-root": {
    borderRadius: "0rem 0rem 1rem 1rem",
  },
});

export const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: "1rem 1rem 0rem 0rem",
  },
});
