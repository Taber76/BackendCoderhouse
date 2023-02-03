import { normalize, schema } from 'normalizr'


const user = new schema.Entity('users')
const message = new schema.Entity('messages')

const chat = new schema.Entity('chats', {
  user: [ user ],
  message: [ message ],
})

const normalizedData = normalize( originalData, chat)