import { Box, styled } from "@mui/material";

export const StyledKey = styled(Box)(({ theme }) => ({
  alignItems: "center",
  border: `0.1rem solid ${theme.palette.grey["500"]}`,
  borderRadius: "0.3rem",
  color: theme.palette.common.white,
  display: "flex",
  fontSize: "0.8rem",
  fontWeight: "900",
  height: "1.4rem",
  justifyContent: "center",
  marginLeft: "0.2rem",
  marginRight: "0.2rem",
  paddingLeft: "0.4rem",
  paddingRight: "0.4rem",
}));
