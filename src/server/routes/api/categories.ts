import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/', async (req, res) => {
    try {
        let cats = await db.Categories.getCats();
        res.json(cats);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
})

export default router;