import { WargamingRegion } from "@/services/wargaming/region";
import {
  WargamingFindClanResultSchema,
  WargamingGetClanResultSchema,
} from "@/services/wargaming/schemas";
import {
  WargamingFindClanItem,
  WargamingGetClanItem,
} from "@/services/wargaming/types";

export class WargamingService {
  constructor(
    private readonly applicationId: string,
    private readonly region: WargamingRegion,
  ) {}

  async getClan(clanId: number): Promise<WargamingGetClanItem> {
    const params = new URLSearchParams({
      application_id: this.applicationId,
      clan_id: clanId.toString(),
    });

    const url = new URL(
      `https://${this.region.apiDomain}/wot/clans/info/?${params}`,
    );

    const body = await fetch(url);
    const json = await body.json();

    const getClanResponse = WargamingGetClanResultSchema.parse(json);

    return getClanResponse.data[clanId.toString()];
  }

  async findClan(name: string): Promise<WargamingFindClanItem[]> {
    const params = new URLSearchParams({
      search: name,
      type: "clans",
    });

    const url = new URL(
      `https://${this.region.websiteDomain}/clans/wot/search/api/autocomplete/?${params}`,
    );

    const body = await fetch(url);
    const json = await body.json();

    const searchClanResponse = WargamingFindClanResultSchema.parse(json);
    return searchClanResponse.search_autocomplete_result;
  }
}
