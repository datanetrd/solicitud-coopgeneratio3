import {Router} from 'express';
const router = Router();
import { async } from 'regenerator-runtime';
import {jwtAuth} from '../controllers/LoginController';


router.get('/adminlogin', (req,res) =>{
    res.render('adminlogin');
});

module.exports  = router;
