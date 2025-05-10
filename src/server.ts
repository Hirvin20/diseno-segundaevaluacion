import express from 'express';
import bodyParser from 'body-parser';
import contactRoutes from './routes/contact';
import paymentRoutes from './routes/payment';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(contactRoutes);
app.use(paymentRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
