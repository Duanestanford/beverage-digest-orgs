const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()
const port = process.env.PORT || 3000

const publicdir = path.join(__dirname, '../public')

app.use(express.static(publicdir))


app.get('', (req,res) => {
  res.sendFile('/Users/duanestanford/Developer/coke-org/public/index.html')
})

app.listen(port, () => {
  console.log('Server is Runnning On Port 3000');
})
