"use strict";

var _express = require("express");

var _regeneratorRuntime = require("regenerator-runtime");

var _Nuevos_socios = _interopRequireDefault(require("../models/Nuevos_socios"));

var _Data_register = _interopRequireDefault(require("../models/Data_register"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); // router.get('/', async (req, res) => 
//   await nuevoSocios.findAll()
//     .then(nuevos_socios => res.render('solicitud', {
//       nuevos_socios
//       }))
//     .catch(err => console.log(err)));

router.put('/edit/:id', function (req, res) {
  var acept = req.body.acept;
  var id = req.params.id;
  var values = {
    estado_solicitud: acept
  };
  var selector = {
    where: {
      id: id
    }
  };

  _Nuevos_socios["default"].update(values, selector).then(function () {
    res.redirect('/buscador');
  })["catch"](function (error) {// error handling
  });
});
router["delete"]('/delete/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);

  _Nuevos_socios["default"].destroy({
    where: {
      id: id
    }
  });

  _Data_register["default"].destroy({
    where: {
      id: id
    }
  }).then(function () {
    res.redirect('/buscador');
  })["catch"](function (error) {// error handling
  });
}); // Search for solicitudes

router.get('/search', function (req, res) {
  var cedula = req.query.cedula;

  _Nuevos_socios["default"].findAll({
    where: {
      cedula: "".concat(cedula)
    }
  }).then(function (nuevos_socios) {
    return res.render('solicitud', {
      nuevos_socios: nuevos_socios
    });
  })["catch"](function (err) {
    return console.log(err);
  });
});
module.exports = router; // router.post('/solicitud', (req,res,next) => {
// const {cedula} = req.body;
// DataRegister.findOne(({ where: {cedula: `${cedula}`} }),  (err, result) => {
//     if(err) {
//         res.render('solicitud.ejs', {products: null});
//     }
//     res.render('solicitud.ejs', {cedula: result});
//     next();
// });
// });