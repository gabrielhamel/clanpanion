import { ReactNode, useReducer } from "react";
import { Search } from "@mui/icons-material";
import { AppBar as MuiAppBar, TextField } from "@mui/material";
import { RegionSelect } from "@/components/RegionSelect";
import ClanSearchBackDrop from "./ClanSearchBackdrop";
import { StyledBackground, StyledSpacer, StyledToolbar } from "./styles";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [isBackDropVisible, toggleBackDrop] = useReducer(
    (value) => !value,
    false,
  );

  return (
    <StyledBackground>
      <MuiAppBar position="static">
        <StyledToolbar>
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
        <ClanSearchBackDrop
          isOpen={isBackDropVisible}
          onLeave={toggleBackDrop}
        />
      </MuiAppBar>
      {children}
    </StyledBackground>
  );
};

export default AppLayout;
