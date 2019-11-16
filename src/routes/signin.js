import {Router} from 'express';
const router = Router();
import { async } from 'regenerator-runtime';
import {jwtAuth} from '../controllers/LoginController';


// const getUser = async obj => {
//     return await User.findOne({
//     where: obj,
//   });
//   };





router.get('/login', (req,res) =>{
    res.render('login');
});

  
 
// login route
router.post('/login', jwtAuth);

module.exports  = router;
