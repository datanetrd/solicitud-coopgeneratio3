// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
  
    window.addEventListener('load', function() {
      var form = document.getElementById('needs-validation');
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          alert('Por favor verifique los campos');
        }
        form.classList.add('was-validated');
      }, false);
    }, false);
  })();

function submitUserForm() {
  var response = grecaptcha.getResponse();
  if(response.length == 0) {
      document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">El captcha es Requerido.</span>';
      return false;
  }
  return true;
}

function verifyCaptcha() {
  document.getElementById('g-recaptcha-error').innerHTML = '';
}

// var regexCedu = /^[1-9]-\d{4}-\d{4}$/;
var regex = /[^-,\d]/g;

var cedula = document.getElementById("cedula");

cedula.addEventListener("keyup", function(){
    if (cedula.value == ""){
     
    }
    cedula.value = cedula.value.replace(regex,"");
})


var cedula2 = document.getElementById("cedula2");

cedula2.addEventListener("keyup", function(){
    if (cedula2.value == ""){
     
    }
    cedula2.value = cedula2.value.replace(regex,"");
})


var telefono = document.getElementById("telefonos");

telefono.addEventListener("keyup", function(){
    if (telefono.value == ""){
     
    }
    new Cleave('#telefonos', {
      delimiter:"-",
      blocks: [ 3, 3, 4]
  });
    telefono.value = telefono.value.replace(regex,"");
})


var celular = document.getElementById("celular");

celular.addEventListener("keyup", function(){
    if (celular.value == ""){
     
    }
    new Cleave('#celular', {
      delimiter:"-",
      blocks: [ 3, 3, 4]
  });
    celular.value = celular.value.replace(regex,"");
})


var TeleTrabajo = document.getElementById("telefonotrabajo");

TeleTrabajo.addEventListener("keyup", function(){
    if (TeleTrabajo.value == ""){
     
    }
    new Cleave('#telefonotrabajo', {
      delimiter:"-",
      blocks: [ 3, 3, 4]
  });
    TeleTrabajo.value = TeleTrabajo.value.replace(regex,"");
})


var sueldo = document.getElementById("sueldo");

sueldo.addEventListener("keyup", function(){
    if (sueldo.value == ""){
     
    }
    new Cleave('#sueldo', {
      numeral: true,
      // numeralDecimalMark: ','
      delimiter: ','
  });
    sueldo.value = sueldo.value.replace(regex,"");
})