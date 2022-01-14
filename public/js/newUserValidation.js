window.onload = function(){
    let fullName = document.querySelector('#fullName')
    fullName.focus()
    
    let formulario = document.querySelector('#formulario');
    

    formulario.addEventListener("submit", function (event) {
    let errores = [];
    
    if(fullName.value == ""){
     errores.push("El campo nombre no puede estar vacío");
     fullName.classList.add("is-invalid")
     } else if (fullName.value.length < 3) {
        errores.push("El campo nombre debe contener al menos tres caracteres");
        fullName.classList.add("is-invalid")
     } else {
        fullName.classList.add("is-valid") 
     }

    let email = document.querySelector('#email')
    if(email.value == ""){
        errores.push("El campo email no puede estar vacío");
        email.classList.add("is-invalid");
       } else {
         email.classList.add("is-valid") 
       }

    let avatar = document.querySelector('#avatar')
    if(avatar.value == ""){
        errores.push("Debes elegir una foto");
        avatar.classList.add("is-invalid")
    } else {
        avatar.classList.add("is-valid") 
      } 

    let password = document.querySelector('#password')
    if(password.value == ""){
        errores.push("El campo contraseña no puede estar vacío");
        password.classList.add("is-invalid")
    } else if (password.value.length < 8) {
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
    } else {
        alert("Registrando")
    }

})

}