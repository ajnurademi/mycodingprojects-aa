// server/routes/auth.js
import express from 'express';
import User from './User.js'; // Benutzermodell importieren

const router = express.Router();

// Registrierungsroute
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Prüfen, ob der Benutzer bereits existiert
        let existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'Benutzer existiert bereits' });
        }

        // Neuen Benutzer erstellen
        const newUser = new User({ email, password });
        await newUser.save();

        res.status(201).json({ message: 'Benutzer erfolgreich registriert' });
    } catch (error) {
        console.error('Fehler bei der Benutzerregistrierung:', error.message);
        res.status(500).json({ message: 'Interner Serverfehler' });
    }
});

export default router;
