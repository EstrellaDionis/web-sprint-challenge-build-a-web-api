// Write your "projects" router here!
const express = require('express');


const router = express.Router();

router.get('/api/projects', (req, res) => {
    res.status(200).json({ 
        message: 'Hello from api projects!',
    })
})

router.get('/api/projects/:id', (req, res) => {

})

router.post('/api/projects', (req, res) => {

})

router.put('/api/projects/:id', (req, res) => {

})

router.delete('/api/projects/id', (req, res) => {

})

router.get('/api/projects/:id/actions', (req, res) => {

})

module.exports = router;