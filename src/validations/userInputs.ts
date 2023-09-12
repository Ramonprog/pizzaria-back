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

export const CategoryValidation = z
  .object({
    name: z.string(),
  })
  .strict();

export const Product = z
  .object({
    name: z.string(),
    price: z.string(),
    banner: z.string(),
    description: z.string(),
    category_id: z.string(),
  })
  .strict();

export const OrderValidation = z
  .object({
    name: z.string(),
    table: z.number(),
  })
  .strict();
