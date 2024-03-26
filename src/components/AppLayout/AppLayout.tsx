import { ReactNode, useReducer } from "react";
import { Search } from "@mui/icons-material";
import { AppBar as MuiAppBar, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { RegionSelect } from "@/components/RegionSelect";
import ClanSearchBackDrop from "./ClanSearchBackdrop";
import {
  StyledBackground,
  StyledContent,
  StyledSpacer,
  StyledToolbar,
} from "./styles";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [isBackDropVisible, toggleBackDrop] = useReducer(
    (value) => !value,
    false,
  );

  return (
    <StyledBackground>
      <MuiAppBar position="static">
        <StyledToolbar>
          <Link href="/">
            <Image
              src="/logo/9_destroyTimerDrownUI.webp"
              alt="logo"
              width={50}
              height={50}
            />
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
        <ClanSearchBackDrop
          isOpen={isBackDropVisible}
          onLeave={toggleBackDrop}
        />
      </MuiAppBar>
      <StyledContent>{children}</StyledContent>
    </StyledBackground>
  );
};

export default AppLayout;
