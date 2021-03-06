const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3000
const cors = require('cors')

app.use(express.json());
app.use(cors())

const routes = require('./routes')

app.use('/', routes)


app.listen(port, async () => {
  await mongoose.connect('mongodb://localhost:27017/halkasi-test');
  console.log(`Example app listening at http://localhost:${port}`)
})