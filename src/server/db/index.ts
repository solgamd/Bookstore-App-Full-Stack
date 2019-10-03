import * as knex from 'knex';
import config from '../config';

export const knextion = knex(config.knex);



import Books from './queries/books';
import BookCats from './queries/bookcats';
import Categories from './queries/categories';
import Users from './queries/users';
import Tokens from './queries/tokens'

export default {
    Books,
    BookCats,
    Categories,
    Users,
    Tokens
}