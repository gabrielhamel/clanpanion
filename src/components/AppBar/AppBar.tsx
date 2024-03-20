import { MouseEventHandler, useReducer } from "react";
import { Search } from "@mui/icons-material";
import { AppBar as MuiAppBar, Backdrop, Typography } from "@mui/material";
import { useRouter } from "next/router";
import {
  StyledLink,
  StyledSearchInputContainer,
  StyledSpacer,
  StyledTextField,
  StyledToolbar,
} from "@/components/AppBar/styles";
import { ClanSearchInput } from "@/components/ClanSearchInput";
import { RegionSelect } from "@/components/RegionSelect";

const ClanSearchBackDrop = ({
  isOpen,
  onLeave,
}: {
  isOpen: boolean;
  onLeave: () => void;
}) => {
  const router = useRouter();

  const handleOnClanChange = (id: number | null) => {
    onLeave();

    if (id) {
      void router.push(`/clan/${id}`);
    }
  };

  const handleOnBackDropClick: MouseEventHandler<HTMLElement> = (e) => {
    if ((e.target as HTMLElement).id === "clan-search-backdrop") {
      return onLeave();
    }
  };

  return (
    <Backdrop
      open={isOpen}
      onClick={handleOnBackDropClick}
      id="clan-search-backdrop"
    >
      <StyledSearchInputContainer>
        <ClanSearchInput onChange={handleOnClanChange} value={null} />
      </StyledSearchInputContainer>
    </Backdrop>
  );
};

const AppBar = () => {
  const [isBackDropVisible, toggleBackDrop] = useReducer(
    (value) => !value,
    false,
  );

  return (
    <MuiAppBar position="static">
      <StyledToolbar>
        <StyledLink href="/">
          <Typography variant="h6" color="white">
            Clanpanion
          </Typography>
        </StyledLink>
        <StyledSpacer />
        <StyledTextField
          placeholder="Find a clan"
          onClick={toggleBackDrop}
          size="small"
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
