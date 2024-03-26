import { Box, styled, Toolbar } from "@mui/material";

export const StyledSpacer = styled(Box)({
  flexGrow: 1,
});

export const StyledToolbar = styled(Toolbar)({
  alignItems: "center",
  display: "flex",
  gap: "1rem",
  width: "100%",
});

export const StyledSearchInputContainer = styled(Box)({
  width: "70vw",
});

export const StyledBackground = styled(Box)({
  backgroundImage:
    'linear-gradient(to bottom, rgb(150 150 150 / 50%), rgb(20 20 20 / 100%)), url("/background/campinovka.webp")',
  height: "100vh",
  userSelect: "none",
});

export const StyledContent = styled(Box)({
  userSelect: "auto",
});
