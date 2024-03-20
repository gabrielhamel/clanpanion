import {
  Box,
  inputBaseClasses,
  styled,
  TextField,
  textFieldClasses,
  Toolbar,
} from "@mui/material";
import Link from "next/link";

export const StyledTextField = styled(TextField)({
  [`&.${textFieldClasses.root} .${inputBaseClasses.root}`]: {
    backgroundColor: "white",
    borderRadius: "2rem",
  },
});

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

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
