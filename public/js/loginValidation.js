window.onload = function(){
    let email = document.querySelector('#email')
    email.focus()
    
    let formulario = document.querySelector('#formulario');
    

    formulario.addEventListener("submit", function (event) {
    let errores = [];
    
    let email = document.querySelector('#email')
    if(email.value == ""){
        errores.push("El campo email no puede estar vacío");
        email.classList.add("is-invalid");
       } else {
         email.classList.add("is-valid") 
       }

    let password = document.querySelector('#password')
    if(password.value == ""){
        errores.push("El campo contraseña no puede estar vacío");
        password.classList.add("is-invalid")
    } else if (password.value.length < 1) {
        errores.push("El campo contraseña debe contener al menos ocho caracteres");
        password.classList.add("is-invalid")
     } else {
        password.classList.add("is-valid") 
     }


    if(errores.length > 0){
    event.preventDefault();
        let ulErrores = document.querySelector ("div.errores ul");
        ulErrores.classList.add("errorsList")
        ulErrores.innerHTML = "";
        for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
        
        }
    } 

})

}