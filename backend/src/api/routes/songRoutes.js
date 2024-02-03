// routes/songRoutes.js
import express from 'express';
import * as songController from '../controllers/songController';

const router = express.Router();
// addissmongouser
// mr1dq9jzLuB9WQFz
// mongodb+srv://addissmongouser:mr1dq9jzLuB9WQFz@cluster0.ddj0hxi.mongodb.net/?retryWrites=true&w=majority
/*

const mongoose = require('mongoose');
const uri = "mongodb+srv://<username>:<password>@cluster0.ddj0hxi.mongodb.net/?retryWrites=true&w=majority";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

*/
router.get('/analytics', songController.generateAnalytics)
router.get('/songs/:id', songController.getSong);
router.get('/songs', songController.listSongs);
router.post('/songs', songController.createSong);
router.put('/songs/:id', songController.updateSong);
router.delete('/songs/:id', songController.deleteSong);


export default router;
