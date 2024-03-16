import { userEvent } from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { RouterOutput } from "@/backend/router";
import { ClanSearchInput } from "@/components/ClanSearchInput";
import { mockTRPCQueryResponse } from "@/tests/mocks/client";
import { render } from "@/tests/render";

describe("Clan search input component", () => {
  it("Should find the searched clan", async () => {
    mockTRPCQueryResponse<RouterOutput["clan"]["search"]>("clan.search", [
      {
        emblem_url: "fake-emblem-url",
        hex_color: "#1EFF87",
        id: 0,
        name: "cringo-clan-name",
        tag: "CRNGO",
        type: "clan",
        url: "fake-clan-url",
      },
    ]);

    const { getByRole, queryByText } = render(<ClanSearchInput />);
    const input = getByRole("combobox");

    await userEvent.type(input, "cringo");

    expect(queryByText(/cringo-clan-name/)).toBeInTheDocument();
  });
});
