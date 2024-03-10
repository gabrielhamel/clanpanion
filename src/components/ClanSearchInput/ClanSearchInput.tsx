import { useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import Image from "next/image";
import { WargamingClanList } from "@/services/wargaming/schemas";

const ClanSearchInput = () => {
  const [searchOptions, setSearchOptions] = useState<WargamingClanList>([]);

  const findMatchingClans = async (searchValue: string) => {
    const response = await fetch(
      `http://localhost:3000/api/clans/search?${new URLSearchParams({
        search: searchValue,
      })}`,
    );
    const searchClanResponse: WargamingClanList = await response.json();

    setSearchOptions(searchClanResponse);
  };

  return (
    <Autocomplete
      options={searchOptions.map((option) => ({
        ...option,
        label: `[${option.tag}] ${option.name}`,
      }))}
      onInputChange={(_, value) => findMatchingClans(value)}
      renderInput={(params) => <TextField {...params} />}
      renderOption={(_, option) => (
        <Box
          sx={{
            display: "flex",
          }}
          key={option.id}
        >
          <Box>
            <Image
              alt="clan-emblem"
              width={32}
              height={32}
              src={`https://eu.wargaming.net${option.emblem_url}`}
            />
          </Box>
          <Box>{`[${option.tag}] ${option.name}]`}</Box>
        </Box>
      )}
    />
  );
};

export default ClanSearchInput;
