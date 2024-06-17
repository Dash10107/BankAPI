const dotenv = require("dotenv");

const config = dotenv.config();

if (config.error) {
  throw new Error("Could not find .env file");
}


module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, 
    dialect: "postgres"
  }
};
