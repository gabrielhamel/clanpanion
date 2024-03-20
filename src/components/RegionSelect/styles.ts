import { inputBaseClasses, Select, styled } from "@mui/material";

export const StyledSelect = styled(Select)({
  [`&.${inputBaseClasses.root}`]: {
    backgroundColor: "white",
  },
  minWidth: "11.2rem",
});
