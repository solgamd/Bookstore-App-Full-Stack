import * as express from 'express';
import passport from 'passport';
import { CreateToken } from '../../utils/security/tokens';

const router = express.Router();

router.post('/', passport.authenticate('local'), async (req: any, res) => {
    try {
        let token = await CreateToken({userid: req.user.id});
        res.json({
            token,
            role: req.user.role,
            userid: req.user.id
        })
    } catch (error) {
        console.log(error);
        res.send('Incorrect login credentials.');
    }
})


export default router;
