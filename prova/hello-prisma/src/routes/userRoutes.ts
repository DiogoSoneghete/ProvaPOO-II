import express from 'express';
import { criarUsuarioController } from '../controllers/userController';

const router = express.Router();

router.post('/criar', criarUsuarioController);

export default router;
