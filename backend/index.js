const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

const productRoutes = require("./routes/productroutes");
const userRoutes = require("./routes/userroutes");
const orderRoutes = require("./routes/orderroutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// 🔹 Serve Images
app.use("/images", express.static(path.join(__dirname, "images")));

// 🔹 API Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// 🔹 Base Route
app.get("/", (req, res) => {
  res.send("API running...");
});

// 🔹 Optional: Serve React frontend (if deployed)
// Make sure this is AFTER all API routes
// const frontendBuildPath = path.join(__dirname, "frontend/build");
// app.use(express.static(frontendBuildPath));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(frontendBuildPath, "index.html"));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));