import express from "express";
import mongoConfig from "./config.js";
import "dotenv/config.js";
import Envelopes from "./models/Envelopes.js";

const app = express();
const PORT = 8500;

// app.use(express.json())

app.get("/", (req, res) => {
  res.json("Hello from server...");
});

app.get('/api/envelopes', async(req, res) => {
    try {
        const envelopes = await Envelopes.find({})
        res.status(200).json(envelopes)
    } catch(error) {
        console.log(err.message)
        res.status(400).json(error)
    }
})

app.listen(PORT, () => {
  console.log("listening on port", PORT);
  mongoConfig()
});