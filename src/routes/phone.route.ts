import { Router } from "express";
import {
  createSmartphone,
  deleteSmartphoneById,
  editSmartphone,
  getAllSmartphones,
  getSmartphoneById,
} from "../controllers/phone.controller";

const router = Router();

router.get("/smartphones", getAllSmartphones);

router.get("/smartphones/:id", getSmartphoneById);

router.post("/smartphones", createSmartphone);

router.put("/smartphones/:id", editSmartphone);

router.delete("/smartphones/:id", deleteSmartphoneById);

export default router;
