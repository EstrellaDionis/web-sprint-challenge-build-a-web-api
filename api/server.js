const express = require('express');
const cors = require('cors');
const projectsRouter = require('./projects/projects-router')
const actionsRouter = require('./actions/actions-router')

const server = express();

server.use(cors());

server.use(express.json());

function logger(req, res, next){
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} ${req.get('Origin')}`)
    next();
}

server.use(logger);

// server.use((req, res, next) => {
//     console.log('the req flows through')
//     next()
// })

server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)



server.use('/', (req, res) => {
    res.send(`<h2>Build a web api sprint</h2>`)
});




// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

server.use('*', (req, res) => {
    res.status(404).json({ message: `${req.method} ${req.baseURL} not found!`})
})

server.use((err, req, res, next) => { //eslint-disable-line
    console.log('OOPS!')
    res.status(err.status || 500).json({
        message: `ERROR: ${err.message}`,
    })
})

module.exports = server;
