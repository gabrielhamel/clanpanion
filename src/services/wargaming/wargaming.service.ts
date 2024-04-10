import { z } from "zod";
import { regions, WargamingRegion } from "@/services/wargaming/region";
import {
  WargamingFindClanResultSchema,
  WargamingGetAccountResultSchema,
  WargamingGetClanEventsResultSchema,
  WargamingGetClanResultSchema,
} from "@/services/wargaming/schemas";
import {
  WargamingFindType,
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
      callType: "api",
      params: {
        clan_id: clanId.toString(),
      },
      region,
      route: "/wot/clans/info",
      schema: WargamingGetClanResultSchema,
    });

    return getClanInfo.data[clanId.toString()];
  }

  async getAccount(accountId: number, region: WargamingRegion) {
    const getAccountInfo = await this.makeRequest({
      callType: "api",
      params: {
        account_id: accountId.toString(),
      },
      region,
      route: "/wot/account/info",
      schema: WargamingGetAccountResultSchema,
    });

    const account = getAccountInfo.data[accountId.toString()];
    if (!account) {
      throw new Error("Account not found");
    }

    return account;
  }

  async findClan(
    name: string,
    type: WargamingFindType,
    region: WargamingRegion,
  ) {
    const searchAutocomplete = await this.makeRequest({
      callType: "website",
      params: {
        search: name,
        type,
      },
      region,
      route: "/clans/wot/search/api/autocomplete",
      schema: WargamingFindClanResultSchema,
    });

    return searchAutocomplete.search_autocomplete_result;
  }

  async getClanHistory(clanId: number, region: WargamingRegion) {
    const getClanEvents = await this.makeRequest({
      callType: "website",
      params: {
        date_until: "2024-04-01T09:35:01+00:00",
        offset: "7200",
      },
      region,
      route: `/clans/wot/${clanId}/newsfeed/api/events`,
      schema: WargamingGetClanEventsResultSchema,
    });

    return getClanEvents.items;
  }
}
