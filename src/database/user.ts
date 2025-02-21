import { Knex } from "knex";
import { db as knex } from "./file-knex/file-knex";

export class UserService {
    setUser(obj: any): Knex.QueryBuilder {
        return knex("users").insert(obj);
    }

    userID(id: number): Knex.QueryBuilder {
        return knex("users").andWhere('id_user', id).first()
    }
}