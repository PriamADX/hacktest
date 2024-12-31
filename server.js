const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');
const app = express();
const port = 3000;

// Utilisation du middleware pour parser les requêtes JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Utilisation du middleware pour servir des fichiers statiques (comme HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Exemple d'identifiants et mot de passe haché
const storedUsername = 'BMX2';
const storedHashedPassword = '$2b$10$XJlNl9tDz1HzZskVYmHKsSHy52G9m1Rwp3OZ/dgUt2ITl6oxg7rZG';  // Haché avec bcrypt pour "Kikkbravo@p"

// Route pour servir la page HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route pour gérer la connexion
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username !== storedUsername) {
        return res.json({ success: false, message: "Identifiant incorrect." });
    }

    // Comparaison du mot de passe avec le haché
    bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (result) {
            return res.json({ success: true });
        } else {
            return res.json({ success: false, message: "Mot de passe incorrect." });
        }
    });
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur backend en écoute sur http://localhost:${port}`);
});
