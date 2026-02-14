const express = require("express");
const cors = require("cors");
const os = require("os");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// Total Memory
app.get("/total-memory", (req, res) => {
  res.json({
    totalMemory: (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + " GB"
  });
});

// Free Memory
app.get("/free-memory", (req, res) => {
  res.json({
    freeMemory: (os.freemem() / (1024 * 1024 * 1024)).toFixed(2) + " GB"
  });
});

// Create File
app.post("/create-file", (req, res) => {
  fs.writeFileSync("test.txt", "Hello File Created!");
  res.json({ message: "File created successfully" });
});

// Copy File
app.post("/copy-file", (req, res) => {
  fs.copyFileSync("test.txt", "copy.txt");
  res.json({ message: "File copied successfully" });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
