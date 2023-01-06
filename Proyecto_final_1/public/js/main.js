const socket = io.connect()
user = true

//-------------------------

function validateEmail(email) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(email.match(mailformat)) {
    return true
  } else {
    alert("You have entered an invalid email address!");
    return false
  }
}


function validateProducto(producto) { // retorna true si hay algun campo vacio
  return Object.values(producto).includes('')
}



//-------------------------------------------------
//------------------ FORMULARIO
// se muestra formulario si el usuario es administrador
if (user) {

  const htmlNewProductForm = templateForm()
 
  document.querySelector('#soloAdministrador').innerHTML = htmlNewProductForm

  //--- Nuevo producto
  const formulario = document.getElementById('formulario')
  formulario.addEventListener('submit', e => {
    e.preventDefault()
    const producto = {
        title: formulario[0].value,
        description: formulario[1].value,
        code: formulario[2].value,
        price: formulario[3].value,
        stock: formulario[4].value,
        thumbnail: formulario[5].value
    }
    if (validateProducto(producto)){
      alert('Complete todos los datos del producto')
    
    } else {
      socket.emit('update', producto)
      
    }
  })

}


//--- PRODUCTOS Y CARRITOS
socket.on('productos', productos => { 
  document.querySelector('#productos').innerHTML = templateProductos( productos )  
})

socket.on('carritos', carritos => {
  document.querySelector('#carritos').innerHTML = templateCarritos( carritos )
})

//-------------------------------

const idProdNew = document.getElementById("idProdNew")
const idProdCartNew = document.getElementById("idProdCartNew")
const idCartDel = document.getElementById("idCartDel")
const idProdDel = document.getElementById("idProdDel")
const idProdCartDel = document.getElementById("idProdCartDel")

 
document.getElementById("newCartBtn").addEventListener("click", ev => {
  fetch('http://localhost:8080/api/carrito/', {
    method: 'POST'
  })
    .then((response) => response.text())
    .then((text) => console.log(text))

  socket.emit('newCart')
})

document.getElementById("newItemCartBtn").addEventListener("click", ev => {
  fetch(`http://localhost:8080/api/carrito/${idProdCartNew.value}/productos/${idProdNew.value}`, {
    method: 'POST'
  })
    .then((response) => response.text())
    .then((text) => console.log(text))
})


document.getElementById("deleteCartBtn").addEventListener("click", ev => {
  console.log(idCartDel.value)
  fetch(`http://localhost:8080/api/carrito/${idCartDel.value}`, {
    method: 'DEL'
  })
    .then((response) => response.text())
    .then((text) => console.log(text))
})




/*
document.getElementById("sendBtn").addEventListener("click", ev => {
  if ( validateEmail(userEmail.value) ) {
    if ( userMensaje.value ){

      socket.emit('newMsj', {
        user: userEmail.value,
        mensaje: userMensaje.value
       })

       userMensaje.value = ''

    } else {
      alert("Ingrese un mensaje!")
    }
  }
})*/