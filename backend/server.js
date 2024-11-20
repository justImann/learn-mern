import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.use(express.json()); // allow us to accept JSON data in the body

app.use("/api/products", productRoutes);

app.listen(5000, () => {
  connectDB();
  console.log(`server started at http://localhost:${port}/`);
});
