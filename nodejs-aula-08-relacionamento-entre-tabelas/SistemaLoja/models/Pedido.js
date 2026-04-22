import sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

//criando o Model
// O método define() do sequelize cria uma tabela no BD
const Pedido = connection.define("Pedido", {
    numero: {
        type: sequelize.INTEGER,
        allowNull: false,},
    valor: {
        type: sequelize.FLOAT,
        allowNull: false,},
    // Chave estrangeira
    cliente_Id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "Cliente",
            key: "id"
        }
    }
})
// método sync() sincroniza os dados com o banco
// force: false : não recria a tabela caso já exista

// Pedido.sync({force: false});

export default Pedido;