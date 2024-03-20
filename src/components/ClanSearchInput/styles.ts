import {
  Box,
  inputBaseClasses,
  styled,
  TextField,
  textFieldClasses,
} from "@mui/material";

export const StyledTextField = styled(TextField)({
  [`&.${textFieldClasses.root} .${inputBaseClasses.root}`]: {
    backgroundColor: "white",
  },
});

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
