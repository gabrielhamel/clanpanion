import { z } from "zod";
import { regions, WargamingRegion } from "@/services/wargaming/region";
import {
  WargamingFindClanResultSchema,
  WargamingGetClanResultSchema,
} from "@/services/wargaming/schemas";
import {
  WargamingFindClanItem,
  WargamingGetClanItem,
} from "@/services/wargaming/types";

export class WargamingService {
  constructor(private readonly applicationId: string) {}

  private async makeRequest<T>({
    params,
    region,
    route,
    callType,
    schema,
  }: {
    schema: z.Schema<T>;
    region: WargamingRegion;
    route: string;
    params: Record<string, string>;
    callType: "api" | "website";
  }) {
    const regionInfo = regions[region];

    const finalParams = new URLSearchParams(params);
    let domain = regionInfo.websiteDomain;

    if (callType === "api") {
      finalParams.set("application_id", this.applicationId);
      domain = regionInfo.apiDomain;
    }

    const url = new URL(`https://${domain}${route}/?${finalParams}`);
    const response = await fetch(url);
    const json = await response.json();

    return schema.parse(json);
  }

  async getClan(
    clanId: number,
    region: WargamingRegion,
  ): Promise<WargamingGetClanItem> {
    const getClanInfo = await this.makeRequest({
      callType: "website",
      params: {
        clan_id: clanId.toString(),
      },
      region,
      route: "/wot/clans/info",
      schema: WargamingGetClanResultSchema,
    });

    return getClanInfo.data[clanId.toString()];
  }

  async findClan(
    name: string,
    region: WargamingRegion,
  ): Promise<WargamingFindClanItem[]> {
    const searchAutocomplete = await this.makeRequest({
      callType: "api",
      params: {
        search: name,
        type: "clans",
      },
      region,
      route: "/clans/wot/search/api/autocomplete",
      schema: WargamingFindClanResultSchema,
    });

    return searchAutocomplete.search_autocomplete_result;
  }
}
