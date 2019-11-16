import {Router} from 'express';
import { async } from 'regenerator-runtime';
import nuevoSocios from '../models/Nuevos_socios';
import DataRegister from '../models/Data_register'; 
import jwt from 'jsonwebtoken';
const router = Router();


router.get('/', (req,res) =>{
    var token = req.cookies['SystemAuth'];
    if (req.cookies['SystemAuth']) {
        var admin = ''
        jwt.verify(token,process.env.SECRET_OR_KEY, function (error,decoded){
          if (decoded.role === 'admin') {
               admin = decoded.role
          }  
        })
    }
res.render('home', {admin,token});
});

module.exports  = router;
