const socket = io.connect();

//----------------------
//--- TABLA DE PRODUCTOS

const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()
    const producto = {
        title: formulario[0].value,
        price: formulario[1].value,
        thumbnail: formulario[2].value
    }
    socket.emit('update', producto);
    formulario.reset()
})


socket.on('productos', data => {
  let productos = data
 
  let htmlToRender = `
  <table class="table container">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Precio</th>
        <th scope="col">Foto</th>
      </tr>
    </thead>
    </tbody>`
  
  productos.forEach(( element, index) => {
    htmlToRender = htmlToRender + `
    <tr>
      <th scope="row">${index + 1}</th>
      <td>${element.title}</td>
      <td>${element.price}</td>
      <td><img src=${element.thumbnail} style="max-width: 50px; height: auto;"</td>
    </tr>` 
  })
  
  htmlToRender = htmlToRender + '</tbody></table>'
  document.querySelector('#tabla').innerHTML = htmlToRender
})


//----------------------
//--- CHAT

const userEmail = document.getElementById("userEmail")
const userMensaje = document.getElementById("userMensaje")
document.getElementById("sendBtn").addEventListener("click", ev => {
  if ( userEmail.value ) {
    if ( userMensaje.value ){

    } else {
      console.log(userMensaje.value)
    }
  } else {
    console.log("Sin email")
  }
})











socket.on('mensajes', data => {
  let mensajes = data
 
  let htmlChatToRender = ``
  
  mensajes.forEach(( element ) => {
    htmlChatToRender = htmlChatToRender + `
    <p>${element.user} ${element.fecha} ${element.mensaje}</p>
    `
     
  })
  
    document.querySelector('#chat').innerHTML = htmlChatToRender
})