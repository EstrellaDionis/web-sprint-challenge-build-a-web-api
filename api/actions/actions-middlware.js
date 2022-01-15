// add middlewares here related to actions
const  { get } = require('./actions-model');

function validateAction(req, res, next){
    const {project_id, notes, description} = req.body
    if (!(typeof notes === "string" && notes.length > 0)) {
        next({ status: 400, message: 'Must contain notes'})
    } 
    if (!(typeof project_id === "number")) {
        next({ status: 400, message: 'Must be a number'})
    } 
    if (!(typeof description === "string" && description.length > 0)) {
        next({ status: 400, message: 'Must include a description'})
    } 
    next()
}

async function validateId(req, res, next){
    const id = req.params.id
    if(await get(id) === null){
        res.send(404)
    }else{
        next()
    }
}


module.exports = {
    validateAction,
    validateId
}