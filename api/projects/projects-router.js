// Write your "projects" router here!
const express = require('express');
const projectsModel = require('./projects-model');
const { validateProject } = require('./projects-middleware')

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

router.put('/:id', (req, res) => {

})

router.delete('/id', (req, res) => {

})

router.get('/:id/actions', (req, res) => {

})

module.exports = router;