// Write your "actions" router here!
const express = require('express');
const actionsModel = require('./actions-model')


const router = express.Router();

router.get('/api/actions', async (req, res) => {
    try{
        const results = await actionsModel.get(req.body)
        res.send(results)
    } catch(err){
        res.send(err)
    }
})

router.get('/api/actions/:id', (req, res) => {

})

router.post('/api/actions', (req, res) => {

})

router.put('/api/actions/:id', (req, res) => {

})

router.delete('/api/actions/:id', (req, res) => {
    
})