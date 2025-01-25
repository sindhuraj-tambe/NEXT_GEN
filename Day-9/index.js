const express = require('express')
const app = express()
const port = 3000


app.get('/about', (req, res) => {
    // res.send('About us page')
    res.json({message: 'About us page', status: 200, data: {name: 'Rajesh', age: 25}, error: false})
  })
  app.get('/download', (req, res) => {
    res.download('index.js')
  })
  app.post('/postdata', (req,res) => {
    res.send('data received' + req.body)
    res.send('data received'+ email)
  })  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
