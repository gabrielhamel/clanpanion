import {
  WargamingClanGetSchema,
  WargamingClanList,
  WargamingGetClanResult,
  WargamingSearchAutocompleteResultSchema,
} from "./schemas";

export const WargamingService = {
  getClan: async (id: number): Promise<WargamingGetClanResult> => {
    const params = new URLSearchParams({
      application_id: "330f82b8c534d7ccd3eee5fb23980bef",
      clan_id: id.toString(),
    });

    const url = new URL(
      `https://api.worldoftanks.eu/wot/clans/info/?${params}`,
    );

    const body = await fetch(url);
    const json = await body.json();

    const getClanResponse = WargamingClanGetSchema.parse(json);

    return getClanResponse.data[id.toString()];
  },
  searchClans: async (searchValue: string): Promise<WargamingClanList> => {
    if (searchValue.length < 2) {
      return [];
    }

    const params = new URLSearchParams({
      search: searchValue,
      type: "clans",
    });

    const url = new URL(
      `https://eu.wargaming.net/clans/wot/search/api/autocomplete/?${params}`,
    );

    let json: unknown;
    try {
      const body = await fetch(url);
      json = await body.json();

      if (body.status !== 200) {
        console.error("API Error", json);
        return [];
      }
    } catch (e) {
      console.error("HTTP error", e);
      return [];
    }

    const searchClanResponse =
      WargamingSearchAutocompleteResultSchema.parse(json);

    return searchClanResponse.search_autocomplete_result;
  },
};
