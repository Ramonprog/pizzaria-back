import { NextFunction, Request, Response, query } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const category_id = req.query.category_id;
      const lisByCategory = new ListByCategoryService();

      const products = await lisByCategory.execute(category_id);

      return res.json(products);
    } catch (error) {
      next(error);
    }
  }
}

export { ListByCategoryController };
