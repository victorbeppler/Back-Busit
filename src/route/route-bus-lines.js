import express from "express";
import { AllBusController } from "../controller/all-bus-controller.js";
import { CreateBusLineController } from "../controller/create-bus-line-controller.js";

const router = express.Router();

router.get(`/bus/all`, new AllBusController().handle);
router.post(`/bus/create-line`, new CreateBusLineController().handle);

export default router;