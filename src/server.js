import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import foodRouter from "./routers/food_router.js";
import userRouter from "./routers/user_router.js";
import orderRouter from "./routers/order.router.js";

import { dbconnect } from "./config/database.config.js";
dbconnect();

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://127.0.0.1:3000"],
  })
);

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

const PORT = 27017;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
