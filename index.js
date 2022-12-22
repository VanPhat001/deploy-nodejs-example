const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`
    <h1>home page</h1>
    <a href="./about">about page</a>
    <br>
    <a href="./contact">contact page</a>
    <br>
    <br>
    <img src="https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-welcome-1.jpg" alt="">    
    `)
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

