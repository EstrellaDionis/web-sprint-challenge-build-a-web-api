// Write your "projects" router here!
const express = require('express');
const projectsModel = require('./projects-model');
const { validateProject, validateId } = require('./projects-middleware')

const router = express.Router();

router.get('/', async (req, res) => {
    try{
    const results = await projectsModel.get()
    res.send(results)
    } catch(err) {
        res.send(err)
    }
})


router.get('/:id', async (req, res) => {
    try{
        const results = await projectsModel.get(req.params.id)
        if (results === null) {
            res.send(404)
        } else {
            res.send(results)
        }
    } catch(err){
        res.send(err)
    }
})

router.post('/', validateProject, async (req, res) => {
    try {
    const results = await projectsModel.insert(req.body)
        res.send(results)
    } catch (err) {
        res.send(err)
    }
})

router.put('/:id', validateProject ,async (req, res) => {
    try {
        const results = await projectsModel.update(req.params.id, req.body)
        res.send(results)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id', validateId, async (req, res) => {
    try {
        await projectsModel.remove(req.params.id)
        res.send(200)
    } catch (error) {
        res.send(404)
    }
})

router.get('/:id/actions', validateId, async (req, res) => {
    try {
        const results = await projectsModel.get(req.params.id)
        res.send(results.actions)
    } catch (error) {
        res.send(400)
    }
})

module.exports = router;