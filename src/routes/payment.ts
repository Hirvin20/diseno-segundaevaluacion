import express from 'express';
import { getDBConnection } from '../db';

const router = express.Router();

router.post('/payment/add', async (req, res) => {
    const {
        service, email, card_holder, card_number,
        exp_month, exp_year, cvv, amount, currency
    } = req.body;

    try {
        const db = await getDBConnection();
        await db.run(
            `INSERT INTO payments (
                service, email, card_holder, card_number, 
                exp_month, exp_year, cvv, amount, currency
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [service, email, card_holder, card_number, exp_month, exp_year, cvv, amount, currency]
        );
        res.status(200).json({ message: 'Pago procesado con éxito.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al procesar el pago.' });
    }
});

export default router;
