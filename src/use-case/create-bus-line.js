import { BusLineRepository } from "../db/repository/bus-line-repository.js";
import { BusLine } from "../model/bus-line.js";

export class CreateBusLine {
  async execute(data) {
    const busLine = new BusLine(data);
    const create = await new BusLineRepository().Create(busLine);
    if (create) {
      return "Bus line created successfully";
    }
  }
}
