/*
Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los siguientes endpoints en el puerto 8080:
Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para acceder a los datos persistidos del servidor.

Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo del desafío anterior.
*/

const express = require('express')
const app = express()
app.use(express.json())
app.listen(8080, () => console.log('escuchando en 8080'))

const Contenedor = require('./contenedor.js')
const productos = new Contenedor('productos.txt')


/*get productos*/
app.get( '/productos', async (req, res) => {
  const allProducts = await productos.getAll()
  res.json( allProducts )
})


/*productoRandom*/
app.get( '/productoRandom', async (req, res) => {
  const allProducts = await productos.getAll()
  const randomNumber = Math.floor(Math.random() * allProducts.length )
  res.json( allProducts[randomNumber] )
})
