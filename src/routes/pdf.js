import {Router} from 'express';
const router = Router();
// const {nuevoSocios} = require('../models/nuevos_socios');
import {savesocioDB} from '../controllers/controller.socio';
  // const db = require('../../config/dbConnection');
router.get('/pdf27', (req,res) => {
    res.render('pdf27');
});

module.exports = router;