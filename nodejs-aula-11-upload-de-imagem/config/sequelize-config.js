// Importando o módulo Sequelize
import { Sequelize } from 'sequelize';
// Configurando a conexão com o banco de dados
const connection = new Sequelize({
  host: 'localhost',
  dialect: 'mysql',
  username: 'root',
  password: '',
  database: 'galeria',
  timezone: '-03:00',
});

export default connection;