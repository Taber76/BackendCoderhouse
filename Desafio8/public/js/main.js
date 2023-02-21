const socket = io.connect()


//-------------------------------------------------------------------------------------------------
//--- PRODUCTOS

const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()
    const producto = {
        title: formulario[0].value,
        price: formulario[1].value,
        thumbnail: formulario[2].value
    }
    socket.emit('update', producto)
    formulario.reset()
})


socket.on('productos', data => {
    document.querySelector('#tabla').innerHTML = productsTable( data )
})


//----------------------------------------------------------------------------------------
//--- CHAT


//envio de mensajes-----------

const userEmail = document.getElementById("userEmail")
const userName = document.getElementById("userName")
const userSurname = document.getElementById("userSurname")
const userAge = document.getElementById("userAge")
const userNickname = document.getElementById("userNickname")
const userAvatar = document.getElementById("userAvatar")
const userMensaje = document.getElementById("userMsj")

document.getElementById("sendBtn").addEventListener("click", ev => {
  if ( validateEmail(userEmail.value) ) {
    if ( userMensaje.value ){
    
      socket.emit('newMsj', {
        author: {
          id: userEmail.value,
          name: userName.value,
          surname: userSurname.value,
          age: userAge.value,
          nickname: userNickname.value,
          avatar: userAvatar.value
        },
        text: userMensaje.value
       })

       userMensaje.value = ''

    } else {
      alert("Ingrese un mensaje!")
    }
  }
})


// recepcion mensajes desde el backend
socket.on('mensajes', data => {
  document.querySelector('#chat').innerHTML = chatMessages( data )
})