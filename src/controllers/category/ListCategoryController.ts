import { NextFunction, Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const categoryList = new ListCategoryService();
      const categories = await categoryList.execute();

      return res.json(categories);
    } catch (error) {
      next(error);
    }
  }
}

export { ListCategoryController };
