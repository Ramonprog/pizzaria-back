import { NextFunction, Request, Response } from "express";
import { ListOrdersService } from "../../services/Order/ListOrdersService";

class ListOrdersController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const listOrdersService = new ListOrdersService();
      const orders = await listOrdersService.execute();
      return res.json(orders);
    } catch (error) {
      next(error);
    }
  }
}

export { ListOrdersController };
