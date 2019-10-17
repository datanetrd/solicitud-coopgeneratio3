import os from 'os';
import request from 'request';
import 'regenerator-runtime/runtime';
import puppeteer from 'puppeteer';
import passport from 'passport';
import fs from 'fs-extra';
import hbs from 'handlebars';
import path from 'path';
import moment from 'moment';
import DataRegister from '../models/Data_register';
import nodemailer from 'nodemailer';
import nuevoSocios from '../models/Nuevos_socios';
export async function savesocioDB(req, res) {

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


  const {
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
    apellido2,
    cedula2,
    sucursal
  } = req.body;
  let errors = [];
  //nombre validations
  if (nombre.lenght <= 3) {
    errors.push({
      text: 'El Nombre debe de tener más de 3 caracteres'
    });
  }
  if (typeof nombre !== 'string' && /^[a-z]+$/i.test(nombre)) {
    errors.push({
      text: 'El Nombre no puede tener caracteres númericos'
    });
  }
  //nombre2 validations
  if (nombre2.lenght <= 3) {
    errors.push({
      text: 'El segundo nombre debe de tener más de 3 caracteres'
    });
  }
  if (typeof nombre2 !== 'string' && /^[a-z]+$/i.test(nombre2)) {
    errors.push({
      text: 'El segundo nombre no puede tener caracteres númericos'
    });
  }
  //apellido validations
  if (apellido.lenght <= 3) {
    errors.push({
      text: 'El Apellido debe de tener más de 3 caracteres'
    });
  }
  if (typeof apellido !== 'string' && /^[a-z]+$/i.test(apellido)) {
    errors.push({
      text: 'El Apellido no puede tener caracteres númericos'
    });
  }
  //apellido2 validations
  if (apellido2.lenght <= 3) {
    errors.push({
      text: 'El segundo apellido debe de tener más de 3 caracteres'
    });
  }
  if (typeof apellido2 !== 'string' && /^[a-z]+$/i.test(apellido2)) {
    errors.push({
      text: 'El segundo apellido no puede tener caracteres númericos'
    });
  }
  //cedula validations
  if (cedula.lenght <= 8) {
    errors.push({
      text: 'La Cedula debe tener mas de  8 digitos'
    });
  }
  //estado civil validations
  if (!estadocivil) {
    errors.push({
      text: 'Por favor Seleccione su Estado Civil'
    });
  }
  //dirección residencial validations
  if (direccionresidencial.length <= 0) {
    errors.push({
      text: 'El siguiente campo esta vacio: Dirección Residencial'
    });
  }
  //provincia validations
  if (provincia.length <= 0) {
    errors.push({
      text: 'El siguiente campo esta vacio: Provincia'
    });
  }
  // telefono validations
  if (telefonos.length < 8) {
    errors.push({
      text: 'El Telefono debe de tener por lo menos 8 Digitos'
    });
  }

  //celular validations
  if (celular.length < 8) {
    errors.push({
      text: 'El Celular debe de tener por lo menos 8 Digitos'
    });
  }

  //oficina validations
  if (oficinatrabajo.length <= 0) {
    errors.push({
      text: 'El siguiente campo esta vacio: Oficina de Trabajo'
    });
  }
  //dirección trabajo validations
  if (direcciontrabajo.length <= 0) {
    errors.push({
      text: 'El siguiente campo esta vacio: Dirección de Trabajo'
    });
  }
  // telefono trabajo validations
  if (telefonotrabajo.length < 8) {
    errors.push({
      text: 'El Telefono del Trabajo debe de tener por lo menos 8 Digitos'
    });
  }
  // fecha ingreso empresa validations
  if (fechaingresoempresa.length <= 0) {
    errors.push({
      text: 'El siguiente campo esta vacio: Fecha de Ingreso Empresa'
    });
  }
  //fax validation
  if (fax.length <= 0) {
    errors.push({
      text: 'El siguiente campo esta vacio: Fax'
    });
  }
  //puesto validation
  if (puesto.length <= 0) {
    errors.push({
      text: 'El siguiente campo esta vacio: Puesto'
    });
  }
  //sueldo validation
  if (sueldo.length <= 0) {
    errors.push({
      text: 'El siguiente campo esta vacio: Sueldo'
    });
  }
  //ahorro validation
  if (ahorromensual.length <= 0) {
    errors.push({
      text: 'El siguiente campo esta vacio: ahorromensual'
    });
  }


  //errors validations 
  if (errors.length > 0) {
    res.render('form', {
      errors,
      nombre,
      apellido,
      estadocivil,
      cedula,
      direccionresidencial,
      telefonos,
      celular,
      provincia,
      oficinatrabajo,
      direcciontrabajo,
      telefonotrabajo,
      fax,
      puesto,
      fechaingresoempresa,
      sueldo,
      email,
      ahorromensual,
      certificadoaportacion,
      valorcertificado,
      nombre2,
      apellido2,
      cedula2
    });
  } else {

    //  // Look for email coincidence
    //  const emailUser = await DataRegister.findOne({cedula: cedula});
    //  if(emailUser) {
    //    req.flash('error_msg', 'The Email is already in use.');
    //    res.redirect('/users/signup');
    //  }
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
        apellido2,
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
    const datta = req.body;
    const compile = async function (templateName, datta) {
      const filePath = path.join(process.cwd(), './src/views', `${templateName}.hbs`);
      const html = await fs.readFileSync(filePath, 'utf-8');
      console.log(html);
      return hbs.compile(html)(datta);

    };
    (async function () {

      try {
        const browser = await puppeteer.launch({
          args: ['--no-sandbox'],
          headless: true
        });
        const page = await browser.newPage();

        const content = await compile('pdf27', datta);
        console.log(content);

        await page.goto(`data:text/html;charset=UTF-8,${content}`, {
          waitUntil: 'networkidle0'
        });
        const options = {
          height: '1110px',
          width: '816px',
          headerTemplate: "<p></p>",
          footerTemplate: "<p></p>",
          pageRanges: "1-1",
          displayHeaderFooter: false,
          margin: {
            top: "10px",
            bottom: "30px"
          },
          printBackground: true,

          path: `${nombre}.pdf`
        }
        await page.emulateMedia('screen');
        await page.pdf(options);
        console.log('done');
        await browser.close();


      } catch (e) {
        console.log('ha habido un error', e);
      }
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          //se indica el usuario y password
          user: 'ramiperez26@gmail.com',
          pass: 'ramito111'
        }
      });
      if (sucursal === "santo domingo") {
        //Opciones para el Envio del correo
        const mailOptions = {
          from: 'ramiperez26@gmail.com',
          to: 'ramiperez71@gmail.com',
          subject: 'nueva solicitud socio',
          text: `nueva solicitud de parte de ${nombre}`,
          attachments: [{
            filename: `${nombre}.pdf`,
            path: path.join(__dirname, `../../${nombre}.pdf`),
            contentType: 'application/pdf'
          }],
        };

        //Envio del mail
        transporter.sendMail(mailOptions, function (error, info) {
          //validar que haya habido un error
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
          const filePath = path.join(__dirname, `../../${nombre}.pdf`);
          fs.unlink(filePath);
        })
      }
      if (sucursal === "santiago") {
        //Opciones para el Envio del correo
        const mailOptions = {
          from: 'ramiperez26@gmail.com',
          to: 'ramiperez71@gmail.com',
          subject: 'nueva solicitud socio',
          text: `nueva solicitud de parte de ${nombre}`,
          attachments: [{
            filename: `${nombre}.pdf`,
            path: path.join(__dirname, `../../${nombre}.pdf`),
            contentType: 'application/pdf'
          }],
        };

        //Envio del mail
        transporter.sendMail(mailOptions, function (error, info) {
          //validar que haya habido un error
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
          const filePath = path.join(__dirname, `../../${nombre}.pdf`);
          fs.unlink(filePath);
        })
      }

      if (sucursal === "constanza") {
         //Opciones para el Envio del correo
         const mailOptions = {
          from: 'ramiperez26@gmail.com',
          to: 'ramiperez71@gmail.com',
          subject: 'nueva solicitud socio',
          text: `nueva solicitud de parte de ${nombre}`,
          attachments: [{
            filename: `${nombre}.pdf`,
            path: path.join(__dirname, `../../${nombre}.pdf`),
            contentType: 'application/pdf'
          }],
        };

        //Envio del mail
        transporter.sendMail(mailOptions, function (error, info) {
          //validar que haya habido un error
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
          const filePath = path.join(__dirname, `../../${nombre}.pdf`);
          fs.unlink(filePath);
        })
      }
      if (sucursal === "sanfrancisco") {
        //Opciones para el Envio del correo
        const mailOptions = {
         from: 'ramiperez26@gmail.com',
         to: 'ramiperez71@gmail.com',
         subject: 'nueva solicitud socio',
         text: `nueva solicitud de parte de ${nombre}`,
         attachments: [{
           filename: `${nombre}.pdf`,
           path: path.join(__dirname, `../../${nombre}.pdf`),
           contentType: 'application/pdf'
         }],
       };

       //Envio del mail
       transporter.sendMail(mailOptions, function (error, info) {
         //validar que haya habido un error
         if (error) {
           console.log(error);
         } else {
           console.log('Email sent: ' + info.response);
         }
         const filePath = path.join(__dirname, `../../${nombre}.pdf`);
         fs.unlink(filePath);
       })
     }
    })();



  }

}

//     // fields: ['nombre', 'cedula', 'estadocivil', 'direccionresidencial', 'provincia', 'telefonos', 'celular', 'oficinatrabajo', 'direcciontrabajo', 'telefono', 'fax', 'puestotrabajo', 'fechaingresoempresa', 'sueldo', 'email']