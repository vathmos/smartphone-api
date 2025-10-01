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

  res.json(smartphones);
}

async function getSmartphoneById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const smartphone = await findsmartphoneById(Number(id));

    if (!smartphone) {
      res.status(404).json({ message: "Smartphone not found" });
      return;
    }

    res.json(smartphone);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("An unknown error has occured");
    }
  }
}

async function createSmartphone(req: Request, res: Response) {
  try {
    const smartphoneData = req.body;

    if (
      !(
        smartphoneData.brand &&
        smartphoneData.model &&
        smartphoneData.brief &&
        smartphoneData.released &&
        smartphoneData.announced &&
        smartphoneData.hardwareDesign &&
        smartphoneData.codename
      )
    ) {
      res.status(400).json({ message: "Some fields are missing" });
    }

    await insertSmartphone(smartphoneData);

    res.status(201).json({
      data: smartphoneData,
      message: "Smartphone created successfully",
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("An unknown error has occured");
    }
  }
}

async function editSmartphone(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const newSmartphoneData = req.body;
    await updateSmartphone(Number(id), newSmartphoneData);

    res.status(200).json({
      data: newSmartphoneData,
      message: "Smartphone updated successfully",
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("An unknown error has occured");
    }
  }
}

async function deleteSmartphoneById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await deleteSmartphone(Number(id));

    res.status(200).json({ message: "Smartphone deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("An unknown error has occured");
    }
  }
}

export {
  getAllSmartphones,
  getSmartphoneById,
  createSmartphone,
  deleteSmartphoneById,
  editSmartphone,
};
