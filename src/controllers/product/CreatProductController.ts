import { NextFunction, Request, Response } from "express";
import { CreatePuctServer } from "../../services/product/CreatePuctServer";
import { Product } from "../../validations/userInputs";

class CreatProductController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { banner, category_id, description, name, price } = req.body;
      const createProductService = new CreatePuctServer();

      if (!req.file) {
        throw new Error("Error upload file");
      } else {
        const { originalname, filename: banner } = req.file;

        const product = await createProductService.execute({
          banner,
          category_id,
          description,
          name,
          price,
        });
        return res.status(201).json(product);
      }
    } catch (error) {
      next(error);
    }
  }
}

export { CreatProductController };
