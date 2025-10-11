import * as z from "zod";

import {
  AUTH_ERROR,
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "@/app/_features/authentication";

export const FormSchema = z.object({
  email: z.email(AUTH_ERROR.INVALID_EMAIL),
  password: z
    .string()
    .min(MIN_PASSWORD_LENGTH, AUTH_ERROR.PASSWORD_TOO_SHORT)
    .max(MAX_PASSWORD_LENGTH, AUTH_ERROR.PASSWORD_TOO_LONG),
});
