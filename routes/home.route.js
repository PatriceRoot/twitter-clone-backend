import { Router } from "express";
import { homeController } from "../controllers/home.controller.js";

const homeRoute = Router();
homeRoute.get("/", homeController);

export default homeRoute;
