<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page de Connexion</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .login-container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 300px;
        }
        .login-container h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        .input-field {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .btn {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            border: none;
            border-radius: 5px;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }
        .btn:hover {
            background-color: #45a049;
        }
        .error-message {
            color: red;
            text-align: center;
            display: none;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h2>Connexion</h2>
        <div id="error-message" class="error-message">
            Identifiant ou mot de passe incorrect.
        </div>
        <form id="login-form">
            <input type="text" id="username" class="input-field" placeholder="Identifiant" required>
            <input type="password" id="password" class="input-field" placeholder="Mot de passe" required>
            <button type="submit" class="btn">Se connecter</button>
        </form>
    </div>

    <script>
        // Identifiants et mot de passe corrects
        const correctUsername = '10Paul';
        const correctPassword = 'paul15@bravo';

        // Fonction de validation du formulaire
        document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault(); // Empêche l'envoi du formulaire

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === correctUsername && password === correctPassword) {
                alert('Connexion réussie!');
                // Redirige vers une autre page ou effectue une autre action ici
                window.location.href = 'dashboard.html'; // Exemple de redirection
            } else {
                document.getElementById('error-message').style.display = 'block';
            }
        });
    </script>
</body>
</html>
