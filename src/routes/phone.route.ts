import { Router } from "express";
import {
  createSmartphone,
  deleteSmartphoneById,
  editSmartphone,
  getAllSmartphones,
  getSmartphoneById,
} from "../controllers/phone.controller";

const router = Router();

router.get("/", getAllSmartphones);

router.get("/:id", getSmartphoneById);

router.post("/", createSmartphone);

router.put("/:id", editSmartphone);

router.delete("/:id", deleteSmartphoneById);

export default router;
