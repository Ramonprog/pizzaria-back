import { NextFunction, Request, Response } from "express";
import { CreateUserServices } from "../../services/user/createUserService";
import { UserData } from "../../validations/userInputs";

class CreateUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const userInput = UserData.parse({
        ...req.body,
      });

      const userService = new CreateUserServices();

      const user = await userService.execute({
        name: userInput.name,
        email: userInput.email,
        password: userInput.password,
      });

      return res.json(user);
    } catch (err) {
      next(err);
    }
  }
}

export { CreateUserController };
