const { Sequelize } = require('sequelize');
const {pg} = require('pg');
//libreria para acceder a las variables de entorno
const dotenv = require('dotenv');
dotenv.config({path: "../vars/.env"});

// Connectar a DB
// const DB_NAME = process.env.DB_NAME;
// const DB_USER = process.env.DB_USER;
// const DB_PASSWORD = process.env.DB_PASSWORD;
// const DB_HOST = process.env.DB_HOST;

const database = new Sequelize(
  // DB_NAME || 'riab', 
  // DB_USER || 'root', 
  // DB_PASSWORD || '', 
  // {
  //   host: DB_HOST || '127.0.0.1',
  //   dialect: 'mysql'
  // }
  {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  host: process.env.POSTGRES_HOST,
  dialectModule: pg,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  }, 
}
);

// Testeamos la conexión con la bd
// (async () => {
//   try {
//     await database.authenticate();
//     console.log('La conexión se ha establecido exitosamente.');
//   } catch (error) {
//     console.error('No se puede conectar a la base de datos:', error);
//   }
// })();

module.exports = database;