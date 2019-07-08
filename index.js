const express = require('express');

const { User } = require('./app/models')

const app = express();

app.use(express.urlencoded({ extended: false }));

User.create({ name: 'Roger', email: 'roger@rocketseat.com.br', password: '123456' });

app.get('/users', (req, res) => {}); //Listar todos
app.post('/users', (req, res) => {}); // Criar
app.get('/users/:id', (req, res) => {}); //Buscar
app.put('/users/:id', (req, res) => {}); //Editar
app.delete('/users/:id', (req, res) => {}); //Deletar

app.post('/register', async (req, res) => {
    const user = await User.create(req.body)
    res.json(user)
})

app.listen(3000);