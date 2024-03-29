import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";
import { DetailUserController } from "../controllers/user/DetailUserController";
import { isAuthenticated } from "../middleware/isAuthenticated";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
import { ListCategoryController } from "../controllers/category/ListCategoryController";
import { CreatProductController } from "../controllers/product/CreatProductController";
import uploadConfig from "../config/multer";
import { ListByCategoryController } from "../controllers/product/ListByCategoryController";
import { CreateOrderController } from "../controllers/Order/CreateOrderController";
import { RemoveOrderController } from "../controllers/Order/RemoveOrderController";
import { AddItemController } from "../controllers/Order/AddItemController";
import { RemoveItemController } from "../controllers/Order/RemoveItemController";
import { SendOrderController } from "../controllers/Order/SendOrderController";
import { ListOrdersController } from "../controllers/Order/ListOrdersController";
import { DetailOrderController } from "../controllers/Order/DetailOrderController";
import { FinishOrderController } from "../controllers/Order/FinishOrderController";

const router = Router();
const uploadFile = multer(uploadConfig.upload("./tmp"));

const userController = new CreateUserController();
const login = new AuthUserController();
const me = new DetailUserController();

const category = new CreateCategoryController();
const categoryList = new ListCategoryController();

const createProduct = new CreatProductController();
const listProduct = new ListByCategoryController();

const createOrder = new CreateOrderController();
const removeOrder = new RemoveOrderController();
const addItem = new AddItemController();
const remoVeItem = new RemoveItemController();
const sendOrder = new SendOrderController();
const listOrders = new ListOrdersController();
const itemDetail = new DetailOrderController();
const finishIOrder = new FinishOrderController();

//user
router.post("/user", userController.handle);
router.post("/login", login.handle);
router.get("/me", isAuthenticated, me.handle);

//category
router.post("/category", isAuthenticated, category.handle);
router.get("/category", isAuthenticated, categoryList.handle);

//product
router.post(
  "/product",
  isAuthenticated,
  uploadFile.single("file"),
  createProduct.handle
);
router.get("/category/product", isAuthenticated, listProduct.handle);

//order
router.post("/order", isAuthenticated, createOrder.handle);
router.delete("/order", isAuthenticated, removeOrder.handle);
router.delete("/order/remove", isAuthenticated, remoVeItem.handle);
router.post("/order/add", isAuthenticated, addItem.handle);
router.put("/order/send", isAuthenticated, sendOrder.handle);
router.get("/orders", isAuthenticated, listOrders.handle);
router.get("/order/detail", isAuthenticated, itemDetail.handle);
router.put("/order/finish", isAuthenticated, finishIOrder.handle);

export { router };
