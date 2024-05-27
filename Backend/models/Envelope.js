import mongoose from "mongoose";

const envelopeSchema = new mongoose.Schema({
  amount: { type: Number },
});

const Envelope = mongoose.model("Envelope", envelopeSchema);

export default Envelope;
