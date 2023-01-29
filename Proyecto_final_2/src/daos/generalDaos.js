const useMongoDb = require('../permissions/dataBaseUse')

let products
let carts 


//if (useMongoDb) {
//  products = require('./products/ProductsDaoMongoDb')
//  carts = require('./carts/CartsDaoMongoDb')
//} else {
  products = require('./products/ProductsDaoFirebase')
  carts = require('./carts/CartsDaoFirebase')
//}


module.exports = { products, carts }