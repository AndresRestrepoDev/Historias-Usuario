import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.ts";

const AuthRouter = express.Router();

AuthRouter.post("/login", loginUser);
AuthRouter.post("/register", registerUser);

export default AuthRouter;