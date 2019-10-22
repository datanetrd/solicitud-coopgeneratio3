import { async } from "regenerator-runtime";

const Validations = async function (req,res,next) {
  
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
  }
  next(); 
}

// module.exports.Validations = Validations;
