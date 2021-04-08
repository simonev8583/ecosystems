if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

export = {
  PORT: process.env.PORT,
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  DB_SQL_USER: process.env.DB_SQL_USER,
  DB_SQL_PASS: process.env.DB_SQL_PASS,
  DB_SQL_DB: process.env.DB_SQL_DB,
  DB_SQL_HOST: process.env.DB_SQL_HOST,
  DB_SQL_PORT: process.env.DB_SQL_PORT,
  JWT_SECRET: process.env.JWT_SECRET,
};
