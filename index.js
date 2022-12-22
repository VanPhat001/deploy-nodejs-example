const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('home page')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.get('/contact', (req, res) => {
    res.send('contact page')
})

app.listen(PORT, () => {
    console.log('listen http://localhost:' + PORT)
})

