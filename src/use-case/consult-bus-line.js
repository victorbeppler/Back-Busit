import { BusLineRepository } from "../db/repository/bus-line-repository.js";

export class ConsultBusLine{
    async all(){
        const allBusLines = await new BusLineRepository().ConsultAll();
        return allBusLines;
    }
}