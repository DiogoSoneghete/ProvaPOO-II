import express from 'express';
import leilaoRoutes from './src/routes/leilaoRoutes';
import lanceRoutes from './src/routes/lanceRoutes';
import usuarioRoutes from './src/routes/userRoutes';
import MainRouter from './src/routes/MainRoutes';

const app = express();
const port = 3000;


app.use(express.static('public'));
app.use('/leilao', leilaoRoutes);
app.use('/lance', lanceRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/main',MainRouter);
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


app.post('/routes', MainRouter);

