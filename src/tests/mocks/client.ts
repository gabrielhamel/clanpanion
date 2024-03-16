import { http, HttpResponse } from "msw";
import { msw } from "@/tests/setup";

export const mockTRPCQueryResponse = <T>(query: string, response: T) =>
  msw.use(
    http.get(`/api/trpc/${query}`, () =>
      HttpResponse.json([
        {
          result: {
            data: response,
          },
        },
      ]),
    ),
  );
