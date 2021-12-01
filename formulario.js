const form = document.querySelector("#listaMail");


form.addEventListener("submit", function(event){
    //Evita que haga submit al instante
    event.preventDefault();

    let mailValido = validarMail(document.getElementById("emailLista").value);

    if(mailValido){
        form.querySelector("small").innerText = "";

    }else{
        form.querySelector("small").innerText = "Ingrese un email valido";
    }

})

function validarMail(input){
    if(input.trim() === ""){
        return false;
    }

    //Regex (regular expresion) que valida que el mail tenga los patrones de texto correctos para que sea valido (intente hacerlo yo pero al final recurri a stackOverflow)
    let regexMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let email = input.trim();
    if(regexMail.test(email)){
        return true;
    }

    return false;
}

