import { NextFunction, Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const id = req.user_id;

    const detailUserService = new DetailUserService();
    try {
      const user = await detailUserService.execute(id);

      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
}

export { DetailUserController };
