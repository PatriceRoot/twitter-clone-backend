import { Router } from "express";
import { getUser } from "../controllers/user.controller.js";

const userRoute = Router();
userRoute.get("/", getUser);

export default userRoute;
