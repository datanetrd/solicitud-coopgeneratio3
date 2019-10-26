import {Router} from 'express';
import { async } from 'regenerator-runtime';
import nuevoSocios from '../models/Nuevos_socios';
import DataRegister from '../models/Data_register'; 
const router = Router();

// router.get('/', async (req, res) => 
//   await nuevoSocios.findAll()
//     .then(nuevos_socios => res.render('solicitud', {
//       nuevos_socios
//       }))
//     .catch(err => console.log(err)));



    
  router.put('/edit/:id', (req,res) =>{
  const {acept} = req.body;
  const {id} = req.params;
  var values = { estado_solicitud: acept };
  var selector = { 
    where: {id}  
  };
  nuevoSocios.update(values, selector)
  .then(function() {
      res.redirect('/buscador')
  })
  .catch(error => {
  // error handling
  })

  });


  router.delete('/delete/:id', (req,res) =>{
    const {id} = req.params;
    console.log(id);
    nuevoSocios.destroy({where: {id:id}})
    DataRegister.destroy({where: {id:id}})
    .then(function() {
      res.redirect('/buscador')
  })
  .catch(error => {
  // error handling
  })
  })


// Search for solicitudes
router.get('/search', (req, res) => {
  let { cedula } = req.query;


  nuevoSocios.findAll({ where: {cedula: `${cedula}`} })
    .then(nuevos_socios => res.render('solicitud', { nuevos_socios }))
    .catch(err => console.log(err));
});


module.exports  = router;

  // router.post('/solicitud', (req,res,next) => {
  // const {cedula} = req.body;
  // DataRegister.findOne(({ where: {cedula: `${cedula}`} }),  (err, result) => {
  //     if(err) {
  //         res.render('solicitud.ejs', {products: null});
  //     }
  //     res.render('solicitud.ejs', {cedula: result});
  //     next();
  // });
  // });