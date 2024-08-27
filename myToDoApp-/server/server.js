// server/server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './auth.js'; // Route importieren

// Umgebungsvariablen laden
dotenv.config();

const app = express();

// Middleware für JSON-Anfragen
app.use(express.json());

// Verbindung zu MongoDB herstellen
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Verbunden mit MongoDB');
})
.catch((error) => {
    console.error('Fehler bei der Verbindung zu MongoDB:', error.message);
});

// Authentifizierungsrouten
app.use('/api/auth', authRoutes);

// Standardroute für Hello World
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});
