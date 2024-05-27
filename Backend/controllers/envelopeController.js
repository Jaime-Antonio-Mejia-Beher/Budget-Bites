import Envelope from "../models/Envelope.js";

export const saveEnvArray = async (req, res) => {
  try {
    const { envelopes } = req.body; // {envelopes:[]}
    if (!Array.isArray(envelopes)) {
      return res.status(400).json({ message: "Envelopes should be an array" });
    }

    const result = await Envelope.insertMany(envelopes);
    res.status(200).json({ envelopes: result, message: "Envelopes added" });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

export const getEnvelopes = async (req, res) => {
  try {
    const envelopes = await Envelope.find({});
    res.status(200).json(envelopes);
  } catch (error) {
    console.log(err.message);
    res.status(400).json(error);
  }
};
