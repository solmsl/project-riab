const { Sequelize } = require('sequelize');
const { Client } = require('pg'); // Asegúrate de usar 'Client' para PostgreSQL
const dotenv = require('dotenv');

// Cargar las variables de entorno
dotenv.config({ path: "../vars/.env" });

// Configuración de PostgreSQL
const database = new Sequelize({
  database: process.env.POSTGRES_DATABASE, // Nombre de la base de datos
  username: process.env.POSTGRES_USER,    // Usuario de la base de datos
  password: process.env.POSTGRES_PASSWORD, // Contraseña del usuario
  host: process.env.POSTGRES_HOST || '127.0.0.1', // Host de la base de datos
  dialect: 'postgres',                     // Dialecto de la base de datos
  dialectModule: Client,                   // Módulo de dialecto
  dialectOptions: {
    ssl: {
      require: true,                       // Habilitar SSL
      rejectUnauthorized: false,           // No rechazar conexiones no autorizadas
    },
  },
});

// Testeamos la conexión con la base de datos
(async () => {
  try {
    await database.authenticate();
    console.log('La conexión se ha establecido exitosamente a PostgreSQL.');
  } catch (error) {
    console.error('No se puede conectar a la base de datos:', error);
  }
})();

// Exportar la instancia de la base de datos
module.exports = database;
