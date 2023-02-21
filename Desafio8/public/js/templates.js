//------------------------------ Funciones generales

function validateEmail(email) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(email.match(mailformat)) {
    return true
  } else {
    alert("You have entered an invalid email address!");
    return false
  }
}


//--------------------------- Templates
// Productos

function productsTable( products ) {

  let htmlToRender = `
  <table class="table container">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Precio</th>
        <th scope="col">Foto</th>
      </tr>
    </thead>
    </tbody>`
  
  products.forEach(( element ) => {
    htmlToRender = htmlToRender + `
    <tr>
      <td>${element.title}</td>
      <td>${element.price}</td>
      <td><img src=${element.thumbnail} style="max-width: 50px; height: auto;"</td>
    </tr>` 
  })
  
  htmlToRender = htmlToRender + '</tbody></table>'
  
  return htmlToRender
}

// Chat

function chatMessages ( data ) {

  const denormalized = denormalizeData (data)
  
  let htmlChatToRender = `<div class="user">Compresion de mensajes: ${denormalized.percent}%</div>`
  
  denormalized.data.forEach(( element ) => {
    htmlChatToRender = htmlChatToRender + `
    <div>
      <div class="user">User: ${element.user.email} </div>
      <div class="date">${element.message.timestamp} </div>
      <div class="mensaje">${element.message.text} </div>
      <img src="${element.user.avatar}" alt="" width="30" height="30">
    </div>
    `
  })

  return htmlChatToRender

}