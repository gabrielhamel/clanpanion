import { useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { skipToken } from "@tanstack/react-query";
import Image from "next/image";
import { apiClient } from "@/backend/client";

const ClanSearchInput = () => {
  const [searchValue, setSearchValue] = useState("");

  const { data } = apiClient.clan.search.useQuery(
    searchValue ? { name: searchValue } : skipToken,
  );

  const clans = data ?? [];

  const autocompleteOptions = clans.map((option) => ({
    ...option,
    label: `[${option.tag}] ${option.name}`,
  }));

  return (
    <Autocomplete
      options={autocompleteOptions}
      onInputChange={(_, value) => setSearchValue(value)}
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
          <Box>{option.label}</Box>
        </Box>
      )}
    />
  );
};

export default ClanSearchInput;
