import express from 'express';

// IMPORTANDO A BLIBLIOTECA MULTER
import multer from 'multer';
// IMPORTANDO O SQUELIZE
import connection from "./config/sequelize-config.js";
import Galeria from './models/Galeria.js';

const app = express();

//Realizando conexão com o banco de dados
connection.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });
//Criando o banco de dados
connection.query('CREATE DATABASE IF NOT EXISTS galeria')
  .then(() => {
    console.log('Banco de dados "galeria" criado ou já existe.');
  })
  .catch((error) => {
    console.error('Erro ao criar o banco de dados:', error);
  });

// Configurando a pasta PUBLIC
app.use(express.static('public'));

// Configurando o EJS
app.set('view engine', 'ejs');

// Configurando o MULTER
const upload = multer({ dest: 'public/uploads/' });

// ROTA PRINCIPAL
app.get('/', (req, res) => {
    Galeria.findAll()
      .then((imagens) => {
        res.render('index', { imagens });
      }).catch((error) => {
        console.error('Erro ao buscar as imagens no banco de dados:', error);
        res.status(500).send('Erro ao buscar as imagens no banco de dados.');
      });
});

// ROTA DE UPLOAD  
app.post('/uploads', upload.single('file'), (req, res) => {
    //Gravando o nome do arquivo gerado pelo multer no banco de dados
    const file = req.file.filename;
    Galeria.create({ arquivo: file })
      .then(() => {
        res.redirect('/');
      })
      .catch((error) => {
        console.error('Erro ao salvar o arquivo no banco de dados:', error);
        res.status(500).send('Erro ao salvar o arquivo no banco de dados.');
      });
});

const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(`Erro ao iniciar o servidor: ${error}`);
  } else {
    console.log(`Servidor rodando em: http://localhost:${port}`);
  }
});