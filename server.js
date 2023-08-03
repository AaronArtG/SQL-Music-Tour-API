// DEPENDENCIES
const express = require('express')
const app = express()


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// band route
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

// event route
const eventsController = require('./controllers/events_controller')
app.use('/events', eventsController)

// Stage route
const stageController = require('./controllers/stage_controller')
app.use('/stage', stageController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})