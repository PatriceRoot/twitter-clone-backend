import { Router } from "express";
import { getAllUsers } from "../controllers/allUsers.controller.js";

const allUsersRoute = Router();

allUsersRoute.get("/:user", getAllUsers);

export default allUsersRoute;
