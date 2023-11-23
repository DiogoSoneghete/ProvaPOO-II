import express from 'express';
import { criarLanceController } from '../controllers/lanceController';

const router = express.Router();

router.post('/criar', criarLanceController);

export default router;
