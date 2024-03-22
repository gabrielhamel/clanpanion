import {
  Box,
  inputBaseClasses,
  styled,
  TextField,
  textFieldClasses,
  Toolbar,
} from "@mui/material";

export const StyledTextField = styled(TextField)({
  [`&.${textFieldClasses.root} .${inputBaseClasses.root}`]: {
    borderRadius: "2rem",
  },
});

export const StyledSpacer = styled(Box)({
  flexGrow: 1,
});

export const StyledToolbar = styled(Toolbar)({
  alignItems: "center",
  display: "flex",
  gap: "3rem",
  width: "100%",
});

export const StyledSearchInputContainer = styled(Box)({
  width: "70vw",
});
