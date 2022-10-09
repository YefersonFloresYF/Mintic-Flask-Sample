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