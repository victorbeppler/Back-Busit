import mongoose from "mongoose";

const busLineSchema = new mongoose.Schema({
  created_date: {
    type: Date,
    default: Date.now,
  },
  Enterprise: String,
  Country: String,
  State: String,
  City: String,
  Departure_Time: String,
  Trajectory: String,
  Trajectory_duration: String,
  Price: String,
});

export const DbBusLine = new mongoose.model("Bus-line", busLineSchema);
