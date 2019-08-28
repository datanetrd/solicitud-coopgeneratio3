

module.exports = data => {
    const {Nombre,Cedula,EstadoCivil,DireccionResidencial,Provincia,Telefonos,Celular,OficinaTrabajo,DireccionTrabajo,Telefono,Fax,PuestoTrabajo,FechaIngresoEmpresa,Sueldo,Email} = data;
    let errors = [];
      if (typeof Nombre === 'string' && Nombre.length >=2 && /^[a-z]+$/i.test(Nombre)) {
        errors.push({text: 'Cedula solo puede llevar caracteres numericos'});
      }
      if (typeof Cedula === 'number' && Cedula.length >=5 && /^[1--9]+$/i.test(Cedula)) {
          errors.push({text: 'Cedula solo puede llevar caracteres numericos'});
      }
      if (!EstadoCivil) {
          errors.push({text: 'Por favor seleccione su Estado Civil'});
      }
  
      if (!DireccionResidencial) {
          errors.push({text: 'El siguiente campo esta vacio: Dirección Residencial'});
      }
      if (!Provincia) {
        errors.push({text: 'El siguiente campo esta vacio: Dirección Residencial'});
      }
  
      if(errors.length > 0) {
          res.render('form', {errors,Nombre,Cedula,EstadoCivil,DireccionResidencial,Provincia,Telefonos,Celular,OficinaTrabajo,DireccionTrabajo,Telefono,Fax,PuestoTrabajo,FechaIngresoEmpresa,Sueldo,Email});
        }
      
};



