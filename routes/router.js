const express = require('express')
const router = express.Router()



const PORT = process.env.PORT || 3002

router.get('/', (req, res)=> {
    res.send('<h1>Movie App</h1>')
})

router.get('/api', (req, res)=> {
    res.json({
        'All Movies': `http://localhost:${PORT}/api/movie`,
        'All Actors': `http://localhost:${PORT}/api/actor`
    })
})

const endpoints = [
    'movie',
    'actor'
]

endpoints.forEach(endpoint => {
    router.use(`/api/${endpoint}`, require(`./api/${endpoint}Routes`))
})

router.use((req, res, next)=> {
    res.status(404)
    .send('<h1>404 Error This page does not exist</h1>')
})

module.exports = router