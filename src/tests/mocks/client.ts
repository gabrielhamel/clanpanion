import { http, HttpResponse } from "msw";
import { RouterOutput } from "@/backend/router";
import { msw } from "@/tests/setup";

type TRPCResponse<
  T extends string,
  U extends RouterOutput[U] = RouterOutput,
> = T extends `${infer Left}.${infer Right}`
  ? TRPCResponse<Right, U[Left]>
  : U[T];

export const mockTRPCQueryResponse = <T extends string>(
  query: T,
  response: TRPCResponse<T>,
) =>
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
