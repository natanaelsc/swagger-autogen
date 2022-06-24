const express = require('express')
const ToolsController = require('../controllers/ToolsController')

const router = express.Router()

const apiV1 = require('../controllers/ApiRoute1')
const apiV2 = require('../controllers/ApiRoute2')

router.use(apiV1)
router.use('/v2', apiV2)

router.get('/test', ToolsController.show)
router.post('/test', store)
router.delete('/test/:id', ToolsController.delete)

function store(_, res) {
    return res.status(201).send("Test Successful")
}

module.exports = router