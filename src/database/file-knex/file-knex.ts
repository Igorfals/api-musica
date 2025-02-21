import knex from "knex";
import * as dotenv from "dotenv";
dotenv.config();

export const db = knex({
    client: "mysql",
    connection: {
        host: process.env.HOST_KEY || "127.0.0.1",
        port: Number(process.env.PORT_BD) || 3306,
        user: process.env.USER_KEY || "root",
        password: process.env.PASSWORD_KEY || "3636",
        database: process.env.DATABASE_KEY || "api-musica",
    },
});