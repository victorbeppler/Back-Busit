import express from "express";
import UserController from "../controller/user-controller.js";
import { UserLoginController } from "../controller/user-login-controlller.js";
import CreateUserMiddleware from "../middleware/create-user-middleware.js";

const router = express.Router();

router.post(
  `/user/create`,
  new CreateUserMiddleware().handle,
  new UserController().handle
);
router.post(`/user/login`, new UserLoginController().handle);

export default router;
//new CreateUserMiddleware().handle,
