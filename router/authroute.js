import express from "express";
// import {
//   registerController,
//   loginController,
//   testController,
// } from "../controller/authcontroller";
import authController from '../controller/authcontroller';

import { isAdmin, requireSignIn } from "..middlewares/authmiddlewares";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;