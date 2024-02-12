import express from "express";
const router = express.Router();
import { login, register } from "../controllers/auth_controller.js";

router.post("/register", register);
router.post("/login", login);

export default router;
