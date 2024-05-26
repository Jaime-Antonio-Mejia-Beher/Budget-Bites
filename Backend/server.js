import express from "express";

const app = express();
const PORT = 8500;

// app.use(express.json())

app.get("/", (req, res) => {
  res.json("Hello from server...");
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
