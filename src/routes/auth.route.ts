import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.ts";
import { refreshToken } from "../controllers/auth.controller.ts";
import { verifyRefreshToken } from "../middlewares/auth.middleware.ts";
import { checkRoles } from "../middlewares/role.middleware.ts";

const AuthRouter = express.Router();

AuthRouter.post("/login", loginUser);
AuthRouter.post("/register", registerUser);
AuthRouter.post("/refresh", verifyRefreshToken, checkRoles(['admin', 'vendedor']), refreshToken);

export default AuthRouter;