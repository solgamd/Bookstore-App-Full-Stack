import * as express from 'express';
import * as passport from 'passport';
import booksRouter from './books';
import bookCatsRouter from './bookcats'
import categoryRouter from './categories';

const router = express.Router();

router.use((req: any, res, next) => {
    passport.authenticate('bearer', {session: false}, (err, user, info) => {
        if (user) req.user = user;
        return next();
    })(req, res, next);
});

router.use('/books', booksRouter);
router.use('/bookcats', bookCatsRouter);
router.use('/category', categoryRouter);
//connect api routes here

export default router;