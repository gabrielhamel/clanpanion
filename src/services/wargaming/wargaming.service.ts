import {
  WargamingClanList,
  WargamingSearchAutocompleteResultSchema,
} from "./schemas";

export const WargamingService = {
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
