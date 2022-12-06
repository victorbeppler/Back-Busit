import { DbBusLine } from "../schema/bus-line-schema.js";

export class BusLineRepository {
  async ConsultAll() {
    return await DbBusLine.find({});
  }
  async Create(data) {
    return await DbBusLine.create(data);
  }
}
