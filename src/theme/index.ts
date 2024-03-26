import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiSelect: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          borderRadius: "2rem",
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
            borderRadius: "2rem",
          },
        },
      },
    },
  },
  palette: {
    mode: "dark",
  },
});
