import express from "express";
const router = express.Router();
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotels,
  getHotel,
  getHotelRooms,
} from "../controllers/hotel_controller.js";
import { verifyAdmin } from "../utils/verification.js";

// Hotel CRUD operation
router.post("/", verifyAdmin, createHotel);
router.put("/edit/:id", verifyAdmin, updateHotel);
router.delete("/delete/:id", verifyAdmin, deleteHotel);
router.get("/find/:id", getHotel);
router.get("/", getHotels);
router.get("/hotelrooms/:hotelid", getHotelRooms);

export default router;
