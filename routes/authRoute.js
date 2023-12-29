import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getordersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// http://localhost:8080/api/v1/auth/login

const router = express.Router();
//register || method Post
router.post("/register", registerController);

//login || post
router.post("/login", loginController);

// Forget Password
router.post("/forgot-password", forgotPasswordController);

// test route
router.get("/test", requireSignIn, isAdmin, testController);

//protected route user
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected route admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getordersController)

//all orders
router.get("/all-orders", requireSignIn,isAdmin, getAllOrdersController)

// order status Update
router.put("/order-status/:orderId",requireSignIn,isAdmin,orderStatusController)

export default router;
