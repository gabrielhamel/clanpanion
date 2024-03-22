import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiSelect: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
  },
  palette: {
    mode: "dark",
  },
});
