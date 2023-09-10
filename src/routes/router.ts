import { Router } from "express";
import { CreateUserController } from "../controllers/user/createUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";

const router = Router();

const userController = new CreateUserController();
const login = new AuthUserController();

router.post("/user", userController.handle);
router.post("/login", login.handle);

export { router };
