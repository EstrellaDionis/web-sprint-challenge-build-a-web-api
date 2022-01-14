// add middlewares here related to projects
const Projects = require('./projects-model');

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




module.exports = {
    validateProject
}