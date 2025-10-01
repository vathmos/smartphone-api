import { Request, Response } from "express";
import smartphoneRouter from "./routes/phone.route";

const express = require("express");
const app = express();
const port = 2000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the other side");
});

app.use("/api", smartphoneRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
