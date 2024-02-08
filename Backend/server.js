const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const db = new sqlite3.Database('./usuario.db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (username TEXT, email TEXT, senha TEXT)");
});

// Rota de cadastro
app.post('/cadastro', (req, res) => {
  const { username, email, senha } = req.body;
  db.run('INSERT INTO users (username, email, senha) VALUES (?, ?, ?)', [username, email, senha], (err) => {
    if (err) {
        res.status(500).json({ message: 'Erro ao cadastrar usuário' });
    } else {
      res.status(200).json({ message: 'Usuário cadastrado com sucesso' });
    }
  });
});

// Rota de login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  db.get('SELECT * FROM users WHERE email = ? AND senha = ?', [email, senha], (err, row) => {
    if (err) {
      res.status(500).json({ message: 'Erro ao fazer login'} );
    } else if (row) {
      res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
      res.status(400).json({ message: 'Usuário ou senha incorretos'});
    }
  });
});

// Iniciando o servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
