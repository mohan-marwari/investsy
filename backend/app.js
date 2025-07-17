require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require('./config/db');

const holdingsRoutes = require("./routes/holdingsRoutes");
const positionsRoutes = require("./routes/positionsRoutes");
const ordersRoutes = require("./routes/ordersRoutes");

// const HoldingsModel = require("./model/HoldingsModel");
// const PositionsModel = require("./model/PositionsModel");


const app = express();
connectDB(); // Connect MongoDB

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/holdings", holdingsRoutes);
app.use("/api/positions", positionsRoutes);
app.use("/api/orders", ordersRoutes);

// Server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
