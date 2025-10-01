import { Request, Response } from "express";
import {
  deleteSmartphone,
  findsmartphoneById,
  findSmartphones,
  insertSmartphone,
  updateSmartphone,
} from "../services/phone.service";

async function getAllSmartphones(req: Request, res: Response) {
  const smartphones = await findSmartphones();
  res.send(smartphones);
}

async function getSmartphoneById(req: Request, res: Response) {
  const { id } = req.params;

  const smartphone = await findsmartphoneById(Number(id));

  if (!smartphone) {
    res.status(404).json({ message: "Smartphone not found" });
    return;
  }

  res.json(smartphone);
}

async function createSmartphone(req: Request, res: Response) {
  const smartphoneData = req.body;
  await insertSmartphone(smartphoneData);

  res.status(201).json({
    data: smartphoneData,
    message: "Smartphone created successfully",
  });
}

async function editSmartphone(req: Request, res: Response) {
  const { id } = req.params;
  const newSmartphoneData = req.body;
  await updateSmartphone(Number(id), newSmartphoneData);

  res.status(200).json({
    data: newSmartphoneData,
    message: "Smartphone updated successfully",
  });
}

async function deleteSmartphoneById(req: Request, res: Response) {
  const { id } = req.params;
  await deleteSmartphone(Number(id));

  res.status(200).json({ message: "Smartphone deleted successfully" });
}

export {
  getAllSmartphones,
  getSmartphoneById,
  createSmartphone,
  deleteSmartphoneById,
  editSmartphone,
};
