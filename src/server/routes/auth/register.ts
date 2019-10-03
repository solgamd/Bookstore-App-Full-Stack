import * as express from 'express';
import db from '../../db';
import { HashPassword } from '../../utils/security/password';
import { CreateToken } from '../../utils/security/tokens';

const router = express.Router();

router.post('/', async (req: any, res, next) => {
    try {
        let user = req.body;
        user.password = HashPassword(req.body.password);
        let [result]: any = await db.Users.insertUser(user.id, user.username, user.password, user.role);
        let token = await CreateToken({userid: result.insertId});
        res.json({
            token,
            role:'guest',
            userid: result.insertId
        })
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

export default router;