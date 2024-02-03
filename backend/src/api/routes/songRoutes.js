// routes/songRoutes.js
import express from 'express';
import * as songController from '../controllers/songController';

const router = express.Router();

router.get('/analytics', songController.generateAnalytics)
router.get('/songs/:id', songController.getSong);
router.get('/songs', songController.listSongs);
router.post('/songs', songController.createSong);
router.put('/songs/:id', songController.updateSong);
router.delete('/songs/:id', songController.deleteSong);


export default router;
