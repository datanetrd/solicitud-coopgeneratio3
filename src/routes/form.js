import {Router} from 'express';
const router = Router();
// import request from 'request';
// const {nuevoSocios} = require('../models/nuevos_socios');
import {savesocioDB} from '../controllers/Form.Controller';
  // const db = require('../../config/dbConnection');
// const validations = require('../../config/validations');
router.get('/form', (req,res) => {
    res.render('form');
});


router.post('/form', savesocioDB, (req,res) =>{
  req.flash('success_msg', 'Solicitud Enviada Correctamente.');
  res.redirect('/');
});
  
  
 


module.exports  = router;



// res.redirect('/');