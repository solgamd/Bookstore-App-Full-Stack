import { Router} from 'express';
import db from '../../db';

const router = Router();

router.put('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let exists: any = await db.BookCats.find(id)
        console.log(exists);
        if(exists !== 0) {
            await db.BookCats.edit(req.params.id, req.body.catid);
        } else {
            await db.BookCats.insert({ bookid: req.params.id, catid: req.body.catid})
        }
    } catch (error) {
        console.log(error);
    }
});

export default router;