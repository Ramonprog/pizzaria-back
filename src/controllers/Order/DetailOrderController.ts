import { Request, Response } from "express";
import { DetailOrderService } from "../../services/Order/DetailOrderService";

class DetailOrderController {
  async handle(req: Request, res: Response, next: NewableFunction) {
    try {
      const detailOrderService = new DetailOrderService();

      const order = await detailOrderService.execute(
        req.query.orderID as string
      );

      return res.json(order);
    } catch (error) {
      next(error);
    }
  }
}

export { DetailOrderController };
