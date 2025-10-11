import { auth } from "@/app/_features/authentication";

import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
