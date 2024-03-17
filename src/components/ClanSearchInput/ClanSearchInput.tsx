import { useState } from "react";
import { Autocomplete, Box, debounce, TextField } from "@mui/material";
import { skipToken } from "@tanstack/react-query";
import Image from "next/image";
import { z } from "zod";
import { apiClient } from "@/backend/client";
import { useTranslation } from "@/hooks/useTranslation";
import { WargamingClanListSchema } from "@/services/wargaming/schemas";
import {
  ClanDetailLineContainer,
  ClanEmblemContainer,
  ClanInput,
  ClanOption,
} from "./styles";

const ClanSearchValueSchema = WargamingClanListSchema.element;
export type ClanSearchValue = z.infer<typeof ClanSearchValueSchema>;

const ClanSearchInput = ({
  onChange,
  value,
}: {
  onChange: (clan: ClanSearchValue | null) => void;
  value: ClanSearchValue | null;
}) => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading } = apiClient.clan.search.useQuery(
    searchValue ? { name: searchValue } : skipToken,
  );

  const clans = data ?? [];

  return (
    <Autocomplete
      selectOnFocus={true}
      clearOnBlur={true}
      handleHomeEndKeys={true}
      clearOnEscape={true}
      loading={isLoading}
      autoComplete={true}
      loadingText={`${t("state.loading")}...`}
      noOptionsText={t("state.empty")}
      filterOptions={(clan) => clan}
      isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
      options={clans}
      filterSelectedOptions={true}
      forcePopupIcon={false}
      getOptionLabel={(clan) => clan.name}
      onInputChange={debounce((_, value) => setSearchValue(value), 250)}
      onChange={(_, newValue) => {
        onChange(newValue);
      }}
      renderInput={(params) =>
        value ? (
          <TextField
            {...params}
            label={t("clan.action.search")}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <ClanInput>
                  <ClanEmblem emblemUrl={value.emblem_url} />
                  <ClanTag color={value.hex_color} tag={value.tag} />
                </ClanInput>
              ),
            }}
          />
        ) : (
          <TextField {...params} label={t("clan.action.search")} />
        )
      }
      renderOption={(props, option) => (
        <ClanOption {...props} key={option.id}>
          <ClanDetailLine
            {...props}
            onClick={(clanId) => {
              onChange(clanId);
            }}
            clan={option}
          />
        </ClanOption>
      )}
    />
  );
};

const ClanDetailLine = ({
  clan,
  onClick,
}: {
  clan: ClanSearchValue;
  onClick: (clan: ClanSearchValue) => void;
}) => (
  <ClanDetailLineContainer onClick={() => onClick(clan)}>
    <ClanEmblem emblemUrl={clan.emblem_url} />
    <Box>
      <ClanTag tag={clan.tag} color={clan.hex_color} />
      <Box>{clan.name}</Box>
    </Box>
  </ClanDetailLineContainer>
);

const ClanTag = ({ tag, color }: { tag: string; color: string }) => (
  <Box sx={{ color }}>
    <b>[{tag}]</b>
  </Box>
);

const ClanEmblem = ({ emblemUrl }: { emblemUrl: string }) => (
  <ClanEmblemContainer>
    <Image
      alt="clan-emblem"
      width={32}
      height={32}
      src={`https://eu.wargaming.net${emblemUrl}`}
    />
  </ClanEmblemContainer>
);

export default ClanSearchInput;
