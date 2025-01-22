import express from "express";
import { authMiddleware } from "../Middleware/userMiddleware.js";
import {
  createRoom,
  getAllRooms,
  getAvailableRooms,
  getRoomByRoomNumber,
} from "../Controllers/RoomController.js";
import upload from "../Config/Multer.js";

const router = express.Router();

router.post("/create", authMiddleware, upload.array("images", 5), createRoom);

router.get("/all-rooms", authMiddleware, getAllRooms);

router.get("/available-rooms", getAvailableRooms);

router.get("/roomNumber", getRoomByRoomNumber);

export default router;
