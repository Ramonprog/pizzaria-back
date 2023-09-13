import { NextFunction, Request, Response } from "express";
import { SendOrderService } from "../../services/Order/SendOrderService";

class SendOrderController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { order_id } = req.body;
      const sendOrderService = new SendOrderService();

      const sendOrder = await sendOrderService.execute(order_id);

      return res.json({ message: "Order sent successfully", sendOrder });
    } catch (error) {
      next(error);
    }
  }
}

export { SendOrderController };
