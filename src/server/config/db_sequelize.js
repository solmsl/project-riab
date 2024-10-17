const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Cargar las variables de entorno
dotenv.config({ path: "../server/.env_EJEMPLO" });

// Configuración de PostgreSQL
const database = new Sequelize({
  database: process.env.POSTGRES_DATABASE, 
  username: process.env.POSTGRES_USER,    
  password: process.env.POSTGRES_PASSWORD, 
  host: process.env.POSTGRES_HOST || '127.0.0.1',
  dialect: 'postgres',

  // dialectOptions: {
  //   ssl: {
  //     require: true,                       // Habilitar SSL
  //     rejectUnauthorized: false,           // No rechazar conexiones no autorizadas
  //   },
  // },
});

(async () => {
  try {
    await database.authenticate();
    console.log('La conexión se ha establecido exitosamente a PostgreSQL.');
  } catch (error) {
    console.error('No se puede conectar a la base de datos:', error.message);
  }
})();

module.exports = database;

