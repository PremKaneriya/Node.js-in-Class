const express = require('express')

const app = express()

const instituteRoutes = require('./institute')
const categoryRouter = require('./category')

app.use('/api/v1', instituteRoutes)
app.use('/api/v1', categoryRouter)
