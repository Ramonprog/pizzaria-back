import { Router } from "express";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";
import { DetailUserController } from "../controllers/user/DetailUserController";
import { isAuthenticated } from "../middleware/isAuthenticated";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
import { ListCategoryController } from "../controllers/category/ListCategoryController";
import { CreatProductController } from "../controllers/product/CreatProductController";

const router = Router();

const userController = new CreateUserController();
const login = new AuthUserController();
const me = new DetailUserController();

const category = new CreateCategoryController();
const categoryList = new ListCategoryController();

const createProduct = new CreatProductController();

//user
router.post("/user", userController.handle);
router.post("/login", login.handle);
router.get("/me", isAuthenticated, me.handle);

//category
router.post("/category", isAuthenticated, category.handle);
router.get("/category", isAuthenticated, categoryList.handle);

//product
router.post("/product", isAuthenticated, createProduct.handle);

export { router };
