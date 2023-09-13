import { NextFunction, Request, Response } from "express";
import { AddItemService } from "../../services/Order/AddItemService";
import { AddItemValidation } from "../../validations/userInputs";

class AddItemController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { productId, amount, orderId } = AddItemValidation.parse({
        ...req.body,
      });
      const addItemService = new AddItemService();
      const addItem = await addItemService.execute({
        amount,
        orderId,
        productId,
      });

      return res.status(201).json(addItem);
    } catch (error) {
      next(error);
    }
  }
}

export { AddItemController };
