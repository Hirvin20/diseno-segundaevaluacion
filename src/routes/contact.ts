import express from 'express';
import { getDBConnection } from '../db';

const router = express.Router();

router.post('/contact/add', async (req, res) => {
    const { nombre, cedula, diseno, mensaje } = req.body;

    try {
        const db = await getDBConnection();
        await db.run(
            `INSERT INTO contact_requests (nombre, cedula, diseno, mensaje) VALUES (?, ?, ?, ?)`,
            [nombre, cedula, diseno, mensaje]
        );
        res.status(200).json({ message: 'Solicitud enviada con éxito.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar la solicitud.' });
    }
});

export default router;
