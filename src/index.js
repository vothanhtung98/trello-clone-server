const express = require('express')

const app = express()

const hostname = 'localhost'
const port = 3000

app.get('/', (req, res) => {
    res.end('<h1>Hello</h1><hr/>')
})

app.listen(port, hostname, () => {
    console.log(`Hello, i'm running at ${hostname}:${port}`)
})