import {knextion as knex} from '../index';

const getCats = () => knex('categories').select();

export default {
    getCats
}