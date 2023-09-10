import { NextFunction, Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";
import { CategoryValidation } from "../../validations/userInputs";

class CreateCategoryController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = CategoryValidation.parse({ ...req.body });

      const createCategoryService = new CreateCategoryService();

      const category = await createCategoryService.execute(name);

      return res.json(category);
    } catch (error) {
      next(error);
    }
  }
}

export { CreateCategoryController };
