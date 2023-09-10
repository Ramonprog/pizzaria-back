import { z } from "zod";

export const UserData = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  })
  .strict();

export const Login = z
  .object({
    email: z.string().email(),
    password: z.string(),
  })
  .strict();
