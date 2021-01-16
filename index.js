const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jeeboks:rlekflwk1@boilerplate.g1c2x.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlPaser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! wow!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})