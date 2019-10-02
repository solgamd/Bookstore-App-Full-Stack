import { knextion as knex } from '../index';

const find = (bookid: number) => knex('bookcats').select().where({ bookid });

const getBookCats = (bookid: number) => knex.raw(`CALL spGetBookCats(?)`, [bookid]);

const insert = (obj: { bookid: number, catid: number }) => knex('bookcats').insert(obj);

const edit = (bookid: number, catid: number) => knex('bookcats').update({ catid }).where({ bookid });

export default {
    find,
    getBookCats,
    insert,
    edit
}