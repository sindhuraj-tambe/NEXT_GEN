const { log } = require('console')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json());
const mongoose = require('mongoose')
const Moviemodel = require('./models/Moviemodel')
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello Guys!')
// })
app.post('/addmoviedata',async (req, res) => {
  try {
    
     const newdata = new Moviemodel(req.body);
     await newdata.save();
     console.log(req.body);
     res.send('Data saved successfully')

  } catch (error) {
    console.log(err);
  }
})

mongoose.connect('mongodb+srv://sindhuraj:lVywO7dzBaGlBk3a@clusterm0.7hmin.mongodb.net/')
.then(()=>console.log('Connected to MongoDB')

);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})