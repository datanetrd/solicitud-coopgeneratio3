"use strict";

module.exports = function (data) {
  var Nombre = data.Nombre,
      Cedula = data.Cedula,
      EstadoCivil = data.EstadoCivil,
      DireccionResidencial = data.DireccionResidencial,
      Provincia = data.Provincia,
      Telefonos = data.Telefonos,
      Celular = data.Celular,
      OficinaTrabajo = data.OficinaTrabajo,
      DireccionTrabajo = data.DireccionTrabajo,
      Telefono = data.Telefono,
      Fax = data.Fax,
      PuestoTrabajo = data.PuestoTrabajo,
      FechaIngresoEmpresa = data.FechaIngresoEmpresa,
      Sueldo = data.Sueldo,
      Email = data.Email;
  var errors = [];

  if (typeof Nombre === 'string' && Nombre.length >= 2 && /^[a-z]+$/i.test(Nombre)) {
    errors.push({
      text: 'Cedula solo puede llevar caracteres numericos'
    });
  }

  if (typeof Cedula === 'number' && Cedula.length >= 5 && /^[1--9]+$/i.test(Cedula)) {
    errors.push({
      text: 'Cedula solo puede llevar caracteres numericos'
    });
  }

  if (!EstadoCivil) {
    errors.push({
      text: 'Por favor seleccione su Estado Civil'
    });
  }

  if (!DireccionResidencial) {
    errors.push({
      text: 'El siguiente campo esta vacio: Dirección Residencial'
    });
  }

  if (!Provincia) {
    errors.push({
      text: 'El siguiente campo esta vacio: Dirección Residencial'
    });
  }

  if (errors.length > 0) {
    res.render('form', {
      errors: errors,
      Nombre: Nombre,
      Cedula: Cedula,
      EstadoCivil: EstadoCivil,
      DireccionResidencial: DireccionResidencial,
      Provincia: Provincia,
      Telefonos: Telefonos,
      Celular: Celular,
      OficinaTrabajo: OficinaTrabajo,
      DireccionTrabajo: DireccionTrabajo,
      Telefono: Telefono,
      Fax: Fax,
      PuestoTrabajo: PuestoTrabajo,
      FechaIngresoEmpresa: FechaIngresoEmpresa,
      Sueldo: Sueldo,
      Email: Email
    });
  }
};