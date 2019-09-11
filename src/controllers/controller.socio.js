import request from 'request';
import DataRegister from  '../models/Data_register';
import nuevoSocios from '../models/Nuevos_socios';
export async function savesocioDB (req,res) {

  const captcha = req.body['g-recaptcha-response'];
  // Secret Key
  const secretKey = '6Lc7Q7MUAAAAAOiHyEwkMOxgJvSv1sF9avSLEOs6';
  // Verify URL
  var verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}&remoteip=${req.connection.remoteAddress}`;

  // if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null)
  // {
  //  req.flash("error", "Captcha Failed");
  // }

   // Make Request To VerifyURL
request(verifyURL, (err, response, body) => {
  body = JSON.parse(body);
  console.log(body);

    // // if not successful
    // if(body.success !== undefined && !body.success){
    //   req.flash("error", "Captcha Failed");
    //   return res.redirect("/");
    // }


  // //If Successful
  // return res.json({"success": true, "msg":"Captcha passed"});
});


 const {nombre,apellido,cedula,estadocivil,direccionresidencial,provincia,telefonos,celular,oficinatrabajo,direcciontrabajo,telefonotrabajo,fax,puesto,sueldo,fechaingresoempresa,email,ahorromensual,certificadoaportacion,valorcertificado,nombre2,apellido2,cedula2} = req.body;
 let errors = [];
 //nombre validations
   if (nombre.lenght <=3) {
     errors.push({text: 'El Nombre debe de tener más de 3 caracteres'});
   }
   if ( typeof nombre !== 'string' && /^[a-z]+$/i.test(nombre)) {
     errors.push({text: 'El Nombre no puede tener caracteres númericos'});
   }
   //nombre2 validations
   if (nombre2.lenght <=3) {
    errors.push({text: 'El segundo nombre debe de tener más de 3 caracteres'});
  }
  if ( typeof nombre2 !== 'string' && /^[a-z]+$/i.test(nombre2)) {
    errors.push({text: 'El segundo nombre no puede tener caracteres númericos'});
  }
   //apellido validations
   if (apellido.lenght <=3 ) {
     errors.push({text: 'El Apellido debe de tener más de 3 caracteres'});
   }
   if (typeof apellido !== 'string' && /^[a-z]+$/i.test(apellido)) {
     errors.push({text: 'El Apellido no puede tener caracteres númericos'});
   }
   //apellido2 validations
   if (apellido2.lenght <=3 ) {
    errors.push({text: 'El segundo apellido debe de tener más de 3 caracteres'});
  }
  if (typeof apellido2 !== 'string' && /^[a-z]+$/i.test(apellido2)) {
    errors.push({text: 'El segundo apellido no puede tener caracteres númericos'});
  }
   //cedula validations
   if (cedula.lenght <=8) {
       errors.push({text: 'La Cedula debe tener mas de  8 digitos'});
   }
   //estado civil validations
   if (!estadocivil) {
       errors.push({text: 'Por favor Seleccione su Estado Civil'});
   }
   //dirección residencial validations
   if (direccionresidencial.length <= 0) {
     errors.push({text: 'El siguiente campo esta vacio: Dirección Residencial'});
    }
    //provincia validations
    if (provincia.length <= 0) {
     errors.push({text: 'El siguiente campo esta vacio: Provincia'});
    }
    // telefono validations
    if (telefonos.length < 8) {
      errors.push({text: 'El Telefono debe de tener por lo menos 8 Digitos'});
    }
    
    //celular validations
    if (celular.length < 8) {
      errors.push({text: 'El Celular debe de tener por lo menos 8 Digitos'});
    }
   
    //oficina validations
    if (oficinatrabajo.length <= 0) {
      errors.push({text: 'El siguiente campo esta vacio: Oficina de Trabajo'});
    }
    //dirección trabajo validations
    if (direcciontrabajo.length <= 0) {
      errors.push({text: 'El siguiente campo esta vacio: Dirección de Trabajo'});
    }
    // telefono trabajo validations
    if (telefonotrabajo.length < 8) {
      errors.push({text: 'El Telefono del Trabajo debe de tener por lo menos 8 Digitos'});
    }
    // fecha ingreso empresa validations
    if (fechaingresoempresa.length <= 0) {
      errors.push({text: 'El siguiente campo esta vacio: Fecha de Ingreso Empresa'});
    }
    //fax validation
    if (fax.length <= 0) {
      errors.push({text: 'El siguiente campo esta vacio: Fax'});
    }
    //puesto validation
    if (puesto.length <= 0) {
      errors.push({text: 'El siguiente campo esta vacio: Puesto'});
    }
    //sueldo validation
    if (sueldo.length <= 0) {
      errors.push({text: 'El siguiente campo esta vacio: Sueldo'});
    }
    //ahorro validation
    if (ahorromensual.length <= 0) {
      errors.push({text: 'El siguiente campo esta vacio: ahorromensual'});
    }
    
    
    //errors validations 
    if(errors.length > 0) {
      res.render('form', {errors,nombre,apellido,cedula,direccionresidencial,telefonos,celular,oficinatrabajo,direcciontrabajo,telefonotrabajo,fax,puesto,fechaingresoempresa,sueldo,email,ahorromensual,certificadoaportacion,valorcertificado,nombre2,cedula2});
    } else {

      
      try {
        let dataName = await nuevoSocios.create({

      nombre,
      apellido
        });

        let data = await DataRegister.create({

      nombre,
      apellido,
      cedula,
      estadocivil,
      direccionresidencial,
      provincia,
      telefonos,
      celular,
      oficinatrabajo,
      direcciontrabajo,
      telefonotrabajo,
      fax,
      puesto,
      sueldo,
      fechaingresoempresa,
      email,
      ahorromensual,
      certificadoaportacion,
      valorcertificado,
      nombre2,
      cedula2

        });

    
        if (data) {
            
          res.redirect('/');
        }
    
      } catch (e) {
          console.log(e);
          res.status(500).json({
              message: 'Algo ha ido Mal',
          data: {}
        });
        // res.redirect('/');
      };
    console.log(verifyURL);
  }
};
//     // fields: ['nombre', 'cedula', 'estadocivil', 'direccionresidencial', 'provincia', 'telefonos', 'celular', 'oficinatrabajo', 'direcciontrabajo', 'telefono', 'fax', 'puestotrabajo', 'fechaingresoempresa', 'sueldo', 'email']
