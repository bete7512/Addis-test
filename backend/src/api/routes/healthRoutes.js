// routes/healthCheckRoutes.js
import express from 'express';

const router = express.Router();

router.get('/health', async (req, res) => {
  res.status(201).json({ status: 'OK' });
  return
});

export default router;
