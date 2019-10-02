import { knextion as knex } from '../index';

const findByUsername = (username: string) => knex('users').select().limit(1).where({ username });

const findById = (id: number) => knex('users').select().where({ id });

const insertUser = (id: number, username: string, password: string, role: string) => knex('users').insert({ username, password, role }).where({ id });

export default {
    findByUsername,
    findById,
    insertUser
}