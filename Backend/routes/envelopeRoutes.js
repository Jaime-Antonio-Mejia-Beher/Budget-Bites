import express from 'express'

import { getEnvelopes } from "../controllers/envelopeController.js";

const router = express.Router()

router.get('/', getEnvelopes)

export default router