const connectToDd = require('../DB/config/connectToMongo')
const { chatModel } = require('../DB/model/mongoDbModel')
const normalizedData = require('../normalize/normal')

class Container {

  constructor( schema ) {
      this.schema = schema
  }
  

  async getAll() {
    try{
      await connectToDd()
      const chatInDb = await this.schema.findOne ( { chatid: 'chat1'} )
   
      console.log(JSON.stringify(chatInDb.chat, null, 2))
      console.log('-----------------')
      console.log( JSON.stringify(normalizedData(chatInDb.chat), null, 2) )


      return chatInDb.messages
      // return normalizedData( messagesInDb )
    } catch(err) {
      console.log(`Error: ${err}`)
    }
  }
 

  async add( message ) {
    try{
      await connectToDd()
      console.log(message)
      const chatInDb = await this.schema.findOne ( { chatid: 'chat1' } )
      const newMsj = chatInDb.chat
      newMsj.push({
        user: { 
          email: message.author.id,
          name: message.author.name,
          surmame: message.author.surname,
          age: message.author.age,
          nickname: message.author.nickname,
          avatar: message.author.avatar,
        },
        message: {
          timestamp: message.date,
          text: message.text
          } 
      })
      await this.schema.updateOne({ chatid: 'chat1' },
        { $set: { chat: newMsj }}
        )
      return
    } catch(err) {
      console.log(`Error: ${err}`)
    }
  }

}


const chats = new Container ( chatModel )


module.exports = { chats }