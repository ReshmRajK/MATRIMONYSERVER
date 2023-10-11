const express = require('express')
require('dotenv').config()
const server = express()
require('./connections/db_connection')

const router = require('./routers/routing')
const cors = require('cors')

server.use(cors())
server.use(express.json())
server.use(router)
const port = 3000 || process.env.port

server.listen(port, () => {
    console.log(`server start at port number ${port}`);
})