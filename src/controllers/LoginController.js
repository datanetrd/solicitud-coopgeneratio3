import dotenv from 'dotenv';dotenv.config();
import jwt from 'jsonwebtoken';
import User from '../models/User'; 
import helpers from '../config/helpers/helpers';
import {expiratejwt} from '../config/config';
import { async } from 'regenerator-runtime';

const getUser = async obj => {
    return await User.findOne({
    where: obj,
  });
  };
export async function jwtAuth (req,res,next) {
    
    

    let jwtOptions = {};
    jwtOptions.secretOrKey = process.env.SECRET_OR_KEY;

      const { email, password } = req.body;

      if (email && password) {
        
        let user = await getUser({ email });
        if (!user) {
          req.flash('error_msg', 'Usuario no encontrado.');
          res.redirect('/');
        }
      const validPass = await helpers.matchPassword(password, user.password)
       if (validPass) {
          let payload = { id: user._id, email: user.email, role: user.role };
          let token = jwt.sign(payload, jwtOptions.secretOrKey,expiratejwt);
          res.cookie('SystemAuth', token,{
            httpOnly: true,
            secure:false,
            maxAge: 3600000
        })
          console.log(token);
          req.flash('success_msg', `Ha iniciado sesión exitosamente. ${user.user_name} `);
          res.redirect('/');
          
        } else {
          req.flash('error_msg', 'Contraseña incorrecta.');
          res.redirect('/login');
        }
      }

      next();
}

module.exports = {jwtAuth};