// add middlewares here related to projects
const Projects = require('./projects-model')

const validateProjectId = (req, res, next) => {
    const { id } = req.params
    Projects.get(id)
    .then(project => {
        if(project) {
            req.project = project
            next()
        } else {
            next({
                status: 404,
                message: "project not found"
            })
        }
    })
}

const validateProjectBody = (req, res, next) => {
    const { name, description } = req.body
    if(!name || !description ){
        res.status(400).json({
            message: "please provide both a name and description"
        })
    } else {
        next()
    }
}


module.exports = {
    validateProjectId,
    validateProjectBody
}