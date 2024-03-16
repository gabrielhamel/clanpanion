import { createTRPCReact } from "@trpc/react-query";
import type { Router } from "./router";

export const apiClient = createTRPCReact<Router>();
