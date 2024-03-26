import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiSelect: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          borderRadius: "1rem",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            borderRadius: "1rem",
          },
        },
      },
    },
  },
  palette: {
    mode: "dark",
  },
});
