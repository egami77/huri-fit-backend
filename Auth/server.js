import express from "express";
import cors from "cors";
import { connectDB } from "./dbconnect.js";
import router from "./HURI-FIT/routes/authRoutes.js";
// const express = require("express");
// const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", router);
app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

const PORT = 3000;
app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on http://localhost:' + PORT);
}
); 