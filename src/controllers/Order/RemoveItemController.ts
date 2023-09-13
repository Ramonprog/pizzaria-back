import { NextFunction, Request, Response } from "express";
import { RemoveItemService } from "../../services/Order/RemoveItemService";

class RemoveItemController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const item_id = req.query.item_id as string;
      const removeItemService = new RemoveItemService();

      await removeItemService.execute(item_id);

      return res.json({ message: "Item removed successfully" });
    } catch (error) {
      next(error);
    }
  }
}

export { RemoveItemController };
