import mongoose from 'mongoose'

const envelopeSchema = new mongoose.Schema({
    amount: {type: Number},
    envelopes: {type: Number},
    user: {type: String},
})

const Envelopes = mongoose.model('Budget-Bites', envelopeSchema)

export default Envelopes

