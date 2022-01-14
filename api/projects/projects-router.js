// Write your "projects" router here!
const express = require('express');
const projectsModel = require('./projects-model');

const router = express.Router();

router.get('/', async (req, res) => {
    try{
    const results = await projectsModel.get()
    res.status(200).json({
        projects: results
    })
    } catch(err) {
        res.send(err)
    }
})


router.get('/:id', async (req, res) => {
    try{
        const results = await projectsModel.get(req.params.id)
        res.status(200).json({
            project: results
        })
    } catch(err){
        res.send(err)
    }
})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/id', (req, res) => {

})

router.get('/:id/actions', (req, res) => {

})

module.exports = router;