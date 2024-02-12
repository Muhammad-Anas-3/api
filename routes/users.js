import express from "express";
const router = express.Router();
import { verifyUser } from "../utils/verification.js";
import {
  updateUser,
  deleteUser,
  getAllUser,
  getOneUser,
} from "../controllers/user_controller.js";

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/",  getAllUser);
router.get("/:id", verifyUser, getOneUser);

export default router;
