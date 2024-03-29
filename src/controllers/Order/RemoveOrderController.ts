import { NextFunction, Request, Response } from "express";
import { RemoveOrderService } from "../../services/Order/RemoveOrderService";

class RemoveOrderController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const order_id = req.query.order_id as string;
      const removeOrder = new RemoveOrderService();

      await removeOrder.execute(order_id);

      return res.json({ message: "Item removed successfully" });
    } catch (error) {
      next(error);
    }
  }
}

export { RemoveOrderController };
