import { Request, Response } from "express";
import { FinishOrderService } from "../../services/Order/FinishOrderService";

class FinishOrderController {
  async handle(req: Request, res: Response, next: NewableFunction) {
    try {
      const { orderID } = req.body;
      const finishOrderService = new FinishOrderService();
      const order = await finishOrderService.execute(orderID);
      return res.json({ message: "Order finished successfully", order });
    } catch (error) {
      next(error);
    }
  }
}

export { FinishOrderController };
