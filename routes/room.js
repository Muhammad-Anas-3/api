import express from "express";
import { verifyAdmin } from "../utils/verification.js";
const router = express.Router();
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} from "../controllers/room_controller.js";

// Hotel CRUD operation
router.post("/createroom/:hotelid", verifyAdmin, createRoom);
router.put("/updateroom/:hotelid/:id", updateRoom);
router.delete("/deleteroom/:hotelid/:id", verifyAdmin, deleteRoom);
router.get("/findroom/:id", getRoom);
router.get("/:hotelid", getRooms);

export default router;
