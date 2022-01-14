// add middlewares here related to projects
const  { get } = require('./projects-model');

function validateProject(req, res, next){
    const {name, completed, description} = req.body
    if (!(typeof name === "string" && name.length > 0)) {
        next({ status: 400, message: 'Name is not valid'})
    } 
    if (!(typeof completed === "boolean")) {
        next({ status: 400, message: 'Must be true or false'})
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
    validateProject,
    validateId
}