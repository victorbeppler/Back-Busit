import express from "express";
import cors from "cors";
import mongoConnect from "./config/mongo.js";
import Status from "./route/route-status.js";
import User from "./route/route-user.js";
import BusLine from "./route/route-bus-lines.js";

const app = express();
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.listen(3005, async () => {
  mongoConnect().then(async () => {
    console.log("Server is running on port 3005");
    app.use("/api", Status);
    app.use("/api", User);
    app.use("/api", BusLine);
  });
});
