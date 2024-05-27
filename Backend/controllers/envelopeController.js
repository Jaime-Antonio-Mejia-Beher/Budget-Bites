import Envelopes from "../models/Envelopes.js";

export const getEnvelopes = async (req, res) => {
  try {
    const envelopes = await Envelopes.find({});
    res.status(200).json(envelopes);
  } catch (error) {
    console.log(err.message);
    res.status(400).json(error);
  }
};

