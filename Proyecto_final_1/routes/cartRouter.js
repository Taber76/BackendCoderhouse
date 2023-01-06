const express = require('express')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

const { products, carts } = require('../class/productsClass')
const Cart = require('../class/cartClass')

const { Router } = express 
const cartRouter = Router() 


/* ------- router carrito --------*/ 

//------------POST Carrito
cartRouter.post('/carrito', async (req, res) => {
  const idNewCart = uuidv4()
  let cart = new Cart(`./data/${idNewCart}.txt`)
  cart.saveFile({ id: idNewCart, timestamp: new Date().toLocaleString(), products: [] })
  carts.addCart(idNewCart)
  res.send(idNewCart)
})

//----------DELETE carrito
cartRouter.delete('/carrito/:id', async (req, res) => {
  const id = req.params.id
  fs.unlink(`./data/${id}.txt`, (error) => {
    error ? console.log('No se ha podido borrar') : console.log('Borrado exitoso')
  })
  await carts.deleteById(id)
  res.send('ok')
})


//---------POST producto en carrito
cartRouter.post('/carrito/:id/productos/:id_prod', async (req, res) => {
  const cartId = req.params.id
  const itemId = req.params.id_prod
  const item = await products.getById(itemId)
  await fs.readFile(`./data/${cartId}.txt`, 'utf8', (err, data) => {
    if (err) throw err
    const carrito = JSON.parse(data)
    carrito.products.push(item)
    console.log(carrito)
    fs.promises.writeFile(
      `./data/${cartId}.txt`, JSON.stringify( carrito, null, 2 )
    )
  })
  
  res.send('ok')
})





/*get productos*/
cartRouter.get('/carrito', async (req, res) => {
  const allProducts = await products.getAll()
  res.json( allProducts )
})

/*get producto segun id*/
cartRouter.get('/productos/:id', async (req, res) => {
  const id = Number(req.params.id)
  const product = await products.getById( id )
  product ? res.json( product )
    : res.status(404).send({ error: 'producto no encontrado'})
})

/*post producto*/
cartRouter.post('/productos', async (req, res) => {
  const productToAdd = req.body
  await products.save( productToAdd )
  res.redirect('/')
})


/*put producto*/
cartRouter.put('/productos/:id', async (req, res) => {
  const id = Number(req.params.id)
  const productToModify = req.body

  if(await products.getById( id )){
    let allProducts = await products.getAll()
    allProducts[ id - 1 ] = {"id": id, ...productToModify}
    products.saveFile( allProducts )
    res.send({ productToModify })
  } else {
    res.status(404).send({ error: 'id no valido'})
  }
})






module.exports = cartRouter