window.onload = function(){
    let name = document.querySelector('#name')
    name.focus()
    
    let formulario = document.getElementById('formularioProducto');
    

    formulario.addEventListener("submit", function (event) {
      alert("submit")
    let errores = [];
    
    if(name.value == ""){
     errores.push("El campo nombre no puede estar vacío");
     name.classList.add("is-invalid")
     } else if (name.value.length < 3) {
        errores.push("El campo nombre debe contener al menos tres caracteres");
        name.classList.add("is-invalid")
     } else {
      name.classList.add("is-valid") 
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