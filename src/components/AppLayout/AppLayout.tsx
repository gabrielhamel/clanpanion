import { ReactNode, useState } from "react";
import { Search } from "@mui/icons-material";
import { AppBar as MuiAppBar, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { RegionSelect } from "@/components/RegionSelect";
import ClanSearchBackDrop from "./ClanSearchBackdrop";
import { StyledBackground, StyledLogoContainer, StyledToolbar } from "./styles";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppBar />
      <StyledBackground />
      {children}
    </>
  );
};

const AppBar = () => {
  const [isBackDropVisible, setBackDropVisibility] = useState(false);

  const handleOnBackDropLeave = () => {
    setBackDropVisibility(false);
  };
  const handleOnBackDropEnter = () => {
    setBackDropVisibility(true);
  };

  return (
    <>
      <ClanSearchBackDrop
        isOpen={isBackDropVisible}
        onLeave={handleOnBackDropLeave}
      />
      <MuiAppBar position="static">
        <StyledToolbar>
          <StyledLogoContainer>
            <Link href="/">
              <Image
                src="/logo/9_destroyTimerDrownUI.webp"
                alt="logo"
                width={50}
                height={50}
              />
            </Link>
          </StyledLogoContainer>
          <TextField
            placeholder="Search..."
            onClick={handleOnBackDropEnter}
            InputProps={{
              endAdornment: <Search />,
            }}
          />
          <RegionSelect />
        </StyledToolbar>
      </MuiAppBar>
    </>
  );
};

export default AppLayout;
