import express from "express";

import {
  getEnvelopes,
  saveEnvArray,
} from "../controllers/envelopeController.js";

const router = express.Router();

// baseRoute /api/envelopes
router.get("/test", (req, res) => {
  res.json("Hello from server /api/envelopes...");
});
router.get("/", getEnvelopes);
router.post("/", saveEnvArray);
router.post("/test", (req, res) => {
  console.log(req.body);
  res.json({ message: "You're getting here" });
});

export default router;
