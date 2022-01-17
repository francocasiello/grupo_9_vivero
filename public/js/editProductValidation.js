window.onload = function(){
    let name = document.querySelector('#name')
    name.focus()
    
    let formulario = document.getElementById('formularioProducto');
    

    formulario.addEventListener("submit", function (event) {
    let errores = [];
    
    if(name.value == ""){
     errores.push("El campo nombre no puede estar vacío");
     name.classList.add("is-invalid")
     } else if (name.value.length < 5) {
        errores.push("El campo nombre debe contener al menos cinco caracteres");
        name.classList.add("is-invalid")
     } else {
      name.classList.add("is-valid") 
     }

     if(description.value == ""){
        errores.push("El campo descripción no puede estar vacío");
        description.classList.add("is-invalid")
        } else if (description.value.length < 20) {
           errores.push("El campo descripción debe contener al menos veinte caracteres");
           description.classList.add("is-invalid")
        } else {
            description.classList.add("is-valid") 
        }
        
        let price = document.querySelector('#price')
        if(price.value == ""){
            errores.push("El campo precio no puede estar vacío");
            price.classList.add("is-invalid")
            } else if (price.value <= 0) {
               errores.push("El campo precio debe ser mayor a 0");
               price.classList.add("is-invalid")
            } else {
                price.classList.add("is-valid") 
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