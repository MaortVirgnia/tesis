import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { createServer } from 'http';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;
const server = createServer(app);
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Endpoint para recibir configuraciones
app.post('/data', async (req, res) => {
    const data = req.body;

    try {
        // Enviar los datos al endpoint externo
        const response = await axios.post('https://n8mtbgjq-3000.use2.devtunnels.ms/data', data);
        res.status(response.status).send(response.data);
    } catch (error) {
        console.error('Error al enviar datos:', error);
        res.status(500).send('Error al enviar datos');
    }
});
