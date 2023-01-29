const admin = require('firebase-admin')
const connectToDd = require('../DB/config/connectToFirebase')


const getCollectionRef = async (collection) => {
  try{
    await connectToDd()
    const db = admin.firestore()
    return db.collection(collection)
  } catch(err) {
    console.log(`Error: ${err}`)
  }

}


class Container {

  constructor( collection ) {
      this.collection = collection
  }
  
  firebase2mongoDb( firebaseArray ) { // convierte formato firebase a array mongodb
    const mongodbArray = []
    firebaseArray.forEach( ele => {
      mongodbArray.push({_id: ele.id, ...ele.data})
    })
    return mongodbArray
  }
/*
  async getCollectionRef() {
    try{
      await connectToDd()
      const db = admin.firestore()
      return db.collection(this.collection)
    } catch(err) {
      console.log(`Error: ${err}`)
    }

  }
*/
  async getAll() { console.log('hola')
    try{
      const ref = await getCollectionRef(this.collection)
      const allItems = ref.get()
      return firebase2mongoDb(allItems)
    } catch(err) {
      console.log(`Error: ${err}`)
    }
  }
 

  async getById( id ) {
    try {
      const itemRef = getCollectionRef().doc(id)
      const item = await itemRef.get()
      if (!item.exists) {
        console.log('No existe esa id!')
      } else {
        return firebase2mongoDb(item)
      }
      return null

    } catch(err) {
      console.log(`Error: ${err}`)
    }
  }


  async deleteById( id ) {  
    try {
      await getCollectionRef().doc(id).delete()
      return 
    } catch(err) {
      console.log(`Error: ${err}`)
      return false
    }
  }


  async deleteAll() {
    try {
      getCollectionRef().get().then( query => {
        query.forEach( doc => { doc.ref.delete()})
      })

      await connectToDd()
      await this.schema.deleteMany()
      return 
    } catch(err) {
      console.log(`Error: ${err}`)
      return false
    }
  }

}


module.exports = Container
