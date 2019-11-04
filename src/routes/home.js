import {Router} from 'express';
import { async } from 'regenerator-runtime';
import nuevoSocios from '../models/Nuevos_socios';
import DataRegister from '../models/Data_register'; 
const router = Router();


router.get('/', (req,res) =>{
    var token = req.cookies['SystemAuth'];
res.render('home', {token});
});

module.exports  = router;
