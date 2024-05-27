import express from "express";
import mongoConfig from "./config.js";
import "dotenv/config.js";
// import Envelopes from "./models/Envelopes.js"; // we wont need this here since we already imported in to controller
import envelopeRoutes from './routes/envelopeRoutes.js'

const app = express();
const PORT = 8500;

// app.use(express.json())

app.get("/", (req, res) => {
  res.json("Hello from server...");
});


app.use('/api/envelopes', envelopeRoutes)


/**
 * this gets replaced by the routes and controller above
app.get("/api/envelopes", async (req, res) => {
  try {
    const envelopes = await Envelopes.find({});
    res.status(200).json(envelopes);
  } catch (error) {
    console.log(err.message);
    res.status(400).json(error);
  }
});
 */

app.listen(PORT, () => {
  console.log("listening on port", PORT);
  mongoConfig();
});
