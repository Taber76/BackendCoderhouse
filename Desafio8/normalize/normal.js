const { normalize, schema } = require('normalizr')


const messageSchema = new schema.Entity('messages')

const userSchema = new schema.Entity('users',
 {message: [messageSchema]},
 {idAttribute: 'email'})

const chatSchema = new schema.Entity('chats', {
  user: [ userSchema ]
})



const normalizedData = (data) => {
  return normalize( data, chatSchema)
}


module.exports = normalizedData 