const { Sequelize } = require('sequelize');
// const { pg } = require('pg');

//libreria para acceder a las variables de entorno
const dotenv = require('dotenv');
dotenv.config({path: "../vars/.env"});

// Connectar a DB
// const DB_NAME = process.env.DB_NAME;
// const DB_USER = process.env.DB_USER;
// const DB_PASSWORD = process.env.DB_PASSWORD;
// const DB_HOST = process.env.DB_HOST;

const config_db = {
  env: process.env.NODE_ENV ?? 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT ?? 3000,
  dbEngine: 'postgres',
  dbURL: 'postgres://default:L8wK2sgxBlrN@ep-raspy-unit-a4qkcoti-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require?sslmode=require'
}

const options = {
  dialect: config_db.dbEngine
};
if (config_db.isProd){
  options.dialectModule = require('pg');
}

const database = new Sequelize( config_db.dbURL, options
  // DB_NAME || 'riab', 
  // DB_USER || 'root', 
  // DB_PASSWORD || '', 
  // {
  //   host: DB_HOST || '127.0.0.1',
  //   dialect: 'mysql'
  // }
  // {
  // uri: "postgres://default:L8wK2sgxBlrN@ep-raspy-unit-a4qkcoti-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  // dialectModule: pg,
  // dialect: "postgres",
   
  // }
);

// Testeamos la conexión con la bd
(async () => {
  try {
    await database.authenticate();
    console.log('La conexión se ha establecido exitosamente.');
  } catch (error) {
    console.error('No se puede conectar a la base de datos:', error);
  }
})();

module.exports = database;