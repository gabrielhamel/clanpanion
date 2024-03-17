import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { RouterOutput } from "@/backend/router";
import { ClanSearchInput } from "@/components/ClanSearchInput";
import { mockTRPCQueryResponse } from "@/tests/mocks/client";
import { act, render } from "@/tests/render";

describe("Clan search input component", () => {
  it("Should find the searched clan and select it", async () => {
    mockTRPCQueryResponse<RouterOutput["clan"]["find"]>("clan.find", [
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
    const onClanSelected = vi.fn();
    const { getByRole, getByText } = render(
      <ClanSearchInput onChange={onClanSelected} value={null} />,
    );
    const input = getByRole("combobox");

    await userEvent.type(input, "cringo");
    const option = getByText(/cringo-clan-name/);
    act(() => option.click());

    expect(onClanSelected).toHaveBeenCalledWith({
      emblem_url: "fake-emblem-url",
      hex_color: "#1EFF87",
      id: 0,
      name: "cringo-clan-name",
      tag: "CRNGO",
      type: "clan",
      url: "fake-clan-url",
    });
  });
});
