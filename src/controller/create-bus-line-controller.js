import { CreateBusLine } from "../use-case/create-bus-line.js";

export class CreateBusLineController {
  async handle(req, res) {
    const busLine = await new CreateBusLine().execute(req.body);
    if (busLine === "Bus line created successfully") {
      res.status(201).json(busLine);
    }
  }
}
