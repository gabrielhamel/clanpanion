import { Backdrop, Box, styled, Toolbar, useMediaQuery } from "@mui/material";

export const StyledToolbar = styled(Toolbar)({
  alignItems: "center",
  display: "flex",
  gap: "1rem",
  height: "7vh",
  width: "100%",
});

export const StyledSearchInputContainer = styled(Box)(({ theme }) => {
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));

  return {
    marginTop: isSM ? "0" : "20vh",
    maxWidth: "37.5rem",
    width: isSM ? "100vw" : "70vw",
  };
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
  alignItems: "start",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  zIndex: 1101,
});
