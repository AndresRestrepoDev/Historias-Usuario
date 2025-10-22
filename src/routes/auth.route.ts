import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.ts";
import { refreshToken } from "../controllers/auth.controller.ts";

const AuthRouter = express.Router();

AuthRouter.post("/login", loginUser);
AuthRouter.post("/register", registerUser);
AuthRouter.post("/refresh", refreshToken);

export default AuthRouter;