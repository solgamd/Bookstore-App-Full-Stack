import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let books = await db.Books.allBooks();
        res.json(books);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

router.get('/:id', async (req, res, next) => {
    let id = req.params.id;
    try {
        let [book] = await db.Books.getOneBook(id);
        let [bookcats]: any = await db.BookCats.getBookCats(id);
        res.json([book, bookcats]);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let book = await db.Books.remove(id);
        res.json(book);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
})

router.post('/', async (req, res) => {
    try {
        let newBook = {
            id: req.params.id,
            title: req.body.title,
            descrip: req.body.descrip,
            author: req.body.author
        }
        await db.Books.insert(newBook);

        // let newBookCat = {
        //     bookid: result,
        //     catid: req.body.selectedCat
        // }
        // await db.BookCats.insert(newBookCat);
    } catch (error) {
        console.log(error);
    }
})

router.put('/:id', async (req, res) => {
    try {
        await db.Books.edit(req.body, req.params.id)
        res.json('Book edited!');
    } catch (error) {
        console.log(error);
        res.status(500);
    }
})

export default router;