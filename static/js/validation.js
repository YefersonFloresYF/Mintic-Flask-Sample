function validar_formulario() {
    var username = document.formRegistro.usuario;
    var email = document.formRegistro.correo;
    var passid = document.formRegistro.pass;
  
    var username_len = username.value.length;
    if (username_len == 0 || username_len < 8) {
        alert("Debes ingresar un username con min. 8 caracteres");
        username.focus();
        return false; //Para la parte dos, que los datos se conserven
    }

    var formato_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (!email.value.match(formato_email)) {
        alert("Debes ingresar un email electronico valido!");
        email.focus();
        return false; //Para la parte dos, que los datos se conserven
    }

    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len < 8) {
        alert("Debes ingresar una password con mas de 8 caracteres");
        passid.focus();
        return false;
    }
 }

function showPassword(){
    let pass1 = document.getElementById("pass");
    if(pass1.type == "password")
    {
        pass1.type = "text";
    }
}

function hidePassword(){
    document.getElementById("pass").type = "password";
}

function bigImg(x) {
    x.style.height = "100px";
    x.style.width = "100px";
}

function normalImg(x) {
    x.style.height = "50px";
    x.style.width = "50px";
}