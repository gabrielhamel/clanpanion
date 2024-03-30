import { TRPCError } from "@trpc/server";

export const transformToTRPCError = (e: unknown) => {
  if (e instanceof Error) {
    throw new TRPCError({
      cause: e,
      code: "INTERNAL_SERVER_ERROR",
      message: e.message,
    });
  }

  console.error(e);

  throw new TRPCError({
    cause: e,
    code: "INTERNAL_SERVER_ERROR",
    message: "Unknown error, please contact an administrator",
  });
};
