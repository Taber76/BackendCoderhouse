const useMongoDb = require('../permissions/dataBaseUse')

let products
let carts 


if (useMongoDb) {
  products = require('./products/ProductsDaoMongoDb')
  carts = require('./carts/CartsDaoMongoDb')
}


module.exports = { products, carts }