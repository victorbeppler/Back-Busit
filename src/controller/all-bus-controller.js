import { ConsultBusLine } from "../use-case/consult-bus-line.js";

export class AllBusController {
  async handle(req, res) {
    const allBusLines = await new ConsultBusLine().all();
    res.status(200).json(allBusLines);
  }
}
