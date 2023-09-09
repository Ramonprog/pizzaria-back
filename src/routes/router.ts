import { Router } from "express";
import { CreateUserController } from "../controllers/user/createUserController";

const router = Router();

const userController = new CreateUserController();

router.post("/user", userController.handle);

export { router };
