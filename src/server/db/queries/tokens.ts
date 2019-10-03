import { knextion as knex } from '../index';

const findOne = async (id: number, token: string) => knex('tokens').select().where({ id, token });

const insert = async (userid: number) => knex('tokens').insert({ userid });

const update = (id: number, token: string) => knex('tokens').update({ token }).where({ id });

export default {
    findOne,
    insert,
    update
}