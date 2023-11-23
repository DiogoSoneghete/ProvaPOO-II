import express from 'express';
import { criarLeilaoController } from '../controllers/leilaoController';

const router = express.Router();

router.post('/criar', criarLeilaoController);

export default router;
