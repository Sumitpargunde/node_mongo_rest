const express = require("express");
const connectDB = require("./config/db");
const personRoutes = require("./routes/personRoutes");
const cors = require("cors");

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", personRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
