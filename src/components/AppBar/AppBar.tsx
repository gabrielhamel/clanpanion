import { useReducer } from "react";
import { Search } from "@mui/icons-material";
import { AppBar as MuiAppBar, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { StyledSpacer, StyledToolbar } from "@/components/AppBar/styles";
import { RegionSelect } from "@/components/RegionSelect";
import ClanSearchBackDrop from "./ClanSearchBackdrop";

const AppBar = () => {
  const [isBackDropVisible, toggleBackDrop] = useReducer(
    (value) => !value,
    false,
  );

  return (
    <MuiAppBar position="static">
      <StyledToolbar>
        <Link href="/">
          <Typography variant="h6" color="white">
            Clanpanion
          </Typography>
        </Link>
        <StyledSpacer />
        <TextField
          placeholder="Find a clan"
          onClick={toggleBackDrop}
          InputProps={{
            endAdornment: <Search />,
          }}
        />
        <RegionSelect />
      </StyledToolbar>
      <ClanSearchBackDrop isOpen={isBackDropVisible} onLeave={toggleBackDrop} />
    </MuiAppBar>
  );
};

export default AppBar;
