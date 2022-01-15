// Write your "actions" router here!
const express = require('express');
const actionsModel = require('./actions-model')
const { validateAction, validateId } = require('./actions-middlware')


const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const results = await actionsModel.get()
        res.send(results)
    } catch(err){
        res.send(err)
    }
})

router.get('/:id', async (req, res) => {
    try{
        const results = await actionsModel.get(req.params.id)
        if (results === null) {
            res.send(404)
        } else {
            res.send(results)
        }
    } catch(err){
        res.send(err)
    }
})

router.post('/', validateAction, async (req, res) => {
    try {
        const results = await actionsModel.insert(req.body)
            res.send(results)
        } catch (err) {
            res.send(err)
        }
})

router.put('/:id', validateAction , async(req, res) => {
    try {
        const results = await actionsModel.update(req.params.id, req.body)
        res.send(results)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id', validateId, async (req, res) => {
    try {
        await actionsModel.remove(req.params.id)
        res.send(200)
    } catch (error) {
        res.send(404)
    }
})

module.exports = router;