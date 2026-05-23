import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";
const Galeria = connection.define('galeria', {
    arquivo: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
Galeria.sync({force: false})
export default Galeria;