const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

const { MongoClient } = require('mongodb')
const MONGODB_URI = "mongodb+srv://admin:b8CxCsv2W6Q3feOy@cluster0.c9re2w6.mongodb.net/?retryWrites=true&w=majority";

const ConnectDB = async function () {
    return await MongoClient.connect(MONGODB_URI)
}


class MongoDB 
{
    static async connect() {
        if (this.client) return this.client
        this.client = await MongoClient.connect(MONGODB_URI)
        return this.client
    }
}

MongoDB.connect()
    .then(() => {
        console.log('ket noi thang cong')
    })
    .catch(() => {
        console.log('ket noi that bai')
    })



app.get('/', (req, res) => {
    res.send(`
    <h1>home page</h1>
    <a href="./about">about page</a>
    <br>
    <a href="./info">info page</a>
    <br>
    <br>
    <img src="https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-welcome-1.jpg" alt="">    
    `)
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.get('/info',async (req, res) => {
    const Info = MongoDB.client.db('dbExample').collection('infos')

    const data = await Info.find({}).toArray()
    res.send(data)
})

app.listen(PORT, () => {
    console.log('listen http://localhost:' + PORT)
})

