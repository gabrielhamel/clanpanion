import { Backdrop, Box, styled, Toolbar } from "@mui/material";

export const StyledToolbar = styled(Toolbar)({
  alignItems: "center",
  display: "flex",
  gap: "1rem",
  height: "7vh",
  width: "100%",
});

export const StyledSearchInputContainer = styled(Box)({
  marginBottom: "31.25rem",
  width: "70vw",
});

export const StyledBackground = styled(Box)({
  backgroundImage:
    'linear-gradient(to bottom, rgb(150 150 150 / 50%), rgb(20 20 20 / 100%)), url("/background/campinovka.webp")',
  height: "93vh",
  overflow: "hidden",
  position: "absolute",
  width: "100vw",
  zIndex: "-1",
});

export const StyledLogoContainer = styled(Box)({
  flexGrow: 1,
});

export const StyledBackdrop = styled(Backdrop)({
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  zIndex: 1101,
});
