const express = require('express')
const app = express()

app.use(express.json())


const frase = 'Hola mundo gracias por venir'

/*get frase*/
app.get('/api/frase', (req, res) => {
  
  res.json({ frase })
})

/*get letra en posicion num*/
app.get('/api/letras/:num', (req, res) => {
  const num = req.params.num - 1
  
  res.json({ letra: frase[num] })
})

/*get palabra en posicion pos*/
app.get('/api/palabras/:pos', (req, res) => {
  const fraseAsArray = frase.split(' ')
  const { pos } = req.params
  const index = pos - 1

  res.json({ buscada: fraseAsArray[ index ]})
})

/*pos agrega palabra al final*/
app.post('api/palabras', (req, res) => {
  const { palabra } = req.body

  const fraseAsArray = frase.split(' ')
  fraseAsArray.push(palabra)

  res.json
})











app.listen(8080, () => console.log('escuchando en 8080'))