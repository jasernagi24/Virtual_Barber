
// validar el campo del nombre en el formulario
function validarNombreForm() {
    nombreForm = document.getElementById("validar-nombreForm").value;
    if (nombreForm == null || nombreForm.length == 0 || !isNaN(nombreForm)) {
        document.getElementById('error-nombreForm').innerHTML = '<h5>Debe contener solo letras</h5>';
    }
    else {
        document.getElementById('error-nombreForm').innerHTML = "";
    }
}

// validar el campo del apellido en el formulario
function validarApellidoForm() {
    apellidoForm = document.getElementById("validar-apellidoForm").value;
    if (apellidoForm == null || apellidoForm.length == 0 || !isNaN(nombreForm)) {
        document.getElementById('error-apellidoForm').innerHTML = '<h5>Debe contener solo letras</h5>';
    }
    else {
        document.getElementById('error-apellidoForm').innerHTML = "";
    }
}

// validar el campo del email en el formulario
function validarEmailForm() {
    emailForm = document.getElementById("validar-emailForm").value;
    if (/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(emailForm) || emailForm == null || emailForm.length == 0) {
        document.getElementById('error-emailForm').innerHTML = '<h5>Debe contener un email valido</h5>';
    }
    else {
        document.getElementById('error-emailForm').innerHTML = "";
    }
}

// validar el campo de la ciudad en el formulario
function validarCiudadForm() {
    ciudadForm = document.getElementById("validar-ciudadForm").value;
    if (ciudadForm == null || ciudadForm.length == 0 || !isNaN(nombreForm)) {
        document.getElementById('error-ciudadForm').innerHTML = '<h5>Debe contener solo letras</h5>';
    }
    else {
        document.getElementById('error-ciudadForm').innerHTML = "";
    }
}

// validar el campo de la direccion en el formulario
function validarDireccionForm() {
    direccionForm = document.getElementById("validar-direccionForm").value;
}

// validar el campo del celular en el formulario
function validarCelularForm() {
    celularForm = document.getElementById("validar-celularForm").value;
    if (celularForm.length < 9 || isNaN(celularForm) || celularForm == null) {
        document.getElementById('error-celularForm').innerHTML = '<h5>Debe tener 10 digitos y solo numeros</h5>';
    }
    else {
        document.getElementById('error-celularForm').innerHTML = "";
    }
}

// validar el campo de la password en el formulario
function validarPasswordForm() {
    passwordForm = document.getElementById("validar-passwordForm").value;
}


