import {Router} from 'express';
const router = Router();
// import request from 'request';
// const {nuevoSocios} = require('../models/nuevos_socios');
import {savesocioDB} from '../controllers/controller.socio';
  // const db = require('../../config/dbConnection');
// const validations = require('../../config/validations');
router.get('/', (req,res) => {
    res.render('form');
});


router.post('/', savesocioDB)
  
  
 


module.exports  = router;



// res.redirect('/');