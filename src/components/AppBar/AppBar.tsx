import { AppBar as MuiAppBar, Box, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { z } from "zod";
import { ClanSearchInput } from "@/components/ClanSearchInput";
import { RegionSelect } from "@/components/RegionSelect";

const AppBar = () => {
  const router = useRouter();
  const { clanId } = router.query;

  const numericClanId = clanId ? z.coerce.number().parse(clanId) : null;

  const handleOnClanChange = (id: number | null) => {
    if (id) {
      void router.push(`/clan/${id}`);
    }
  };

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            gap: "3rem",
            width: "100%",
          }}
        >
          <Typography variant="h6">Clanpanion</Typography>
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <ClanSearchInput
              onChange={handleOnClanChange}
              value={numericClanId}
            />
          </Box>
          <Box>
            <RegionSelect />
          </Box>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
