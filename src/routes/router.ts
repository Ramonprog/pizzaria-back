import { Router } from "express";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";
import { DetailUserController } from "../controllers/user/DetailUserController";
import { isAuthenticated } from "../middleware/isAuthenticated";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";

const router = Router();

const userController = new CreateUserController();
const login = new AuthUserController();
const me = new DetailUserController();

const category = new CreateCategoryController();

//user
router.post("/user", userController.handle);
router.post("/login", login.handle);
router.get("/me", isAuthenticated, me.handle);

//category
router.post("/category", isAuthenticated, category.handle);

export { router };
