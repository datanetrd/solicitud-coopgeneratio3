import { async } from 'regenerator-runtime';
import {Router} from 'express';
const router = Router();
import nuevoSocios from '../models/Nuevos_socios';
import DataRegister from '../models/Data_register'; 
import passport from 'passport';
import helpers from '../config/helpers/helpers';
import User from '../models/User';


const createUser = async (newUser) => { 
  return await User.create(newUser);
};

const getUser = async obj => {
  return await User.findOne({
  where: obj,
});
};

router.get('/signup',(req,res) =>{
  res.render('signup');
});



// register route
router.post('/signup', async function(req, res, next) {

  const { user_name, email, password } = req.body;
  const newUser = {
    user_name,
    email,
    password
};
let Usermail = await getUser({ email });
    if (Usermail) {
      req.flash('error_msg', 'El correo ya esta registrado.');
      res.redirect('/signup');
      return
    };
  newUser.password = await helpers.encryptPassword(password);
  createUser( newUser ).then(
    req.flash('success_msg', `Cuenta creada exitosamente.`),
    res.redirect('/login')
  )
  .catch(function(err) {
    // print the error details
    console.log(err);
});
});


// router.post('/signup',passport.authenticate('local.signup', {
//     successRedirect: '/',
//     FailureRedirect: '/signup',
//     FailureFlash: true
//   }));

  module.exports = router;