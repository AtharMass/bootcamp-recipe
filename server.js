const express = require('express')
const path = require('path')
const urllib = require('urllib')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'dist')))
app.use('/modules', express.static(path.join(__dirname, '/node_modules')))