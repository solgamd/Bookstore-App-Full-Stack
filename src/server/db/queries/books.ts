import { knextion as knex } from '../index';

const allBooks = () => knex('books').select();

const getOneBook = (id: number) => knex('books').select().where({ id });

const insert = (book: { id: number, title: string, descrip: string, author: string }) => knex('books').insert(book);

const edit = (obj: { title?: string, descrip?: string, author: string}, id: number ) => knex('books').update(obj).where({id});

const remove = (id: number) => knex('books').delete().where({ id });

export default {
    allBooks,
    getOneBook,
    insert,
    remove,
    edit
}