const { v4: uuidv4 } = require('uuid')
const knex = require('knex')


class Contanier {

  constructor( config, dbTable ) {
      this.config = config
      this.dbTable = dbTable
  }

  
  async getAll() {
    try{
      let itemsInDb
      if (this.config.client === 'sqlite3') {
        itemsInDb = await knex(this.config).from(this.dbTable).select('*')
        knex(this.config).destroy()
      } else {
        //mariadb
      }
      return itemsInDb
    } catch(err) {
      console.log(`Error: ${err}`)
    }
  }
 
  
  async add( item ) {
    try{
      if (this.config.client === 'sqlite3') {
        await knex(this.config)(this.dbTable).insert( item )
        knex(this.config).destroy()
      } else {
        //mariadb
      }
      return

    } catch(err) {
      console.log(`Error: ${err}`)
    }
  }

/*
  async getById( id ) {
    const products = await this.getAll()
    try {
      const product = products.find( ele => ele.id === id)
      return product ? product : null

    } catch(err) {
      console.log(`Error: ${err}`)
    }
  }


  async deleteById( id ) {
    let products = await this.getAll()
    
    try {
      products = products.filter( ele => ele.id != id )
      await this.saveFile( products )
    
    } catch(err) {
      console.log(`Error: ${err}`)
    }
  }


  async deleteAll() {
    await this.saveFile(this.file, [])
  }
*/
}



module.exports = Contanier