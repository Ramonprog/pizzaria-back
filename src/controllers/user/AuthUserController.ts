import { NextFunction, Request, Response } from "express";
import { Login } from "../../validations/userInputs";
import { AuthUserService } from "../../services/user/AuthUserService";

export class AuthUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { email, password } = Login.parse({ ...req.body });
    const authUserService = new AuthUserService();

    try {
      const auth = await authUserService.execut({ email, password });

      return res.json(auth);
    } catch (error) {
      next(error);
    }
  }
}
