import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  throw new Error("deu ruim");
});

export { router };
