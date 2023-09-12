import { NextFunction, Request, Response } from "express";
import { OrderValidation } from "../../validations/userInputs";
import { CreateOrderService } from "../../services/Order/CreateOrderService";

class CreateOrderController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, table } = OrderValidation.parse({ ...req.body });
      const createOrderService = new CreateOrderService();

      const order = await createOrderService.execute({ table, name });

      return res.status(201).json(order);
    } catch (error) {
      next(error);
    }
  }
}

export { CreateOrderController };
