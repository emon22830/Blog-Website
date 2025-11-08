import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";

dotenv.config();
const app = express();

// Default middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect DB first
await connectDB();

const PORT = process.env.PORT || 5000;

app.use("/api/v1/user", userRoute);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.listen(PORT, () => {
  console.log(`✅ Server listening at port ${PORT}`);
});
