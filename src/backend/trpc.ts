import { initTRPC } from "@trpc/server";
import { createContext } from "@/backend/context";

export const trpc = initTRPC.context<typeof createContext>().create();
