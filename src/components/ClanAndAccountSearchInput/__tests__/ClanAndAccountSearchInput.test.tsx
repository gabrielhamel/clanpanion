import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { RouterOutput } from "@/backend/router";
import { ClanAndAccountSearchInput } from "@/components/ClanAndAccountSearchInput";
import { mockTRPCQueryResponse } from "@/tests/mocks/client";
import { act, render } from "@/tests/render";

describe("Clan search input component", () => {
  it("Should find the searched clan and select it", async () => {
    mockTRPCQueryResponse<RouterOutput["wargaming"]["search"]>(
      "wargaming.search",
      [
        {
          emblem_url: "fake-emblem-url",
          hex_color: "#1EFF87",
          id: 666,
          name: "cringo-clan-name",
          tag: "CRNGO",
          type: "clan",
          url: "fake-clan-url",
        },
      ],
    );

    const onItemSelected = vi.fn();
    const { getByRole, findByText } = render(
      <ClanAndAccountSearchInput
        onClanSelected={onItemSelected}
        onAccountSelected={() => {}}
      />,
    );
    const input = getByRole("combobox");

    await userEvent.type(input, "cringo");
    const option = await findByText(/cringo-clan-name/);
    act(() => option.click());

    expect(onItemSelected).toHaveBeenCalledWith(666);
  });
});
