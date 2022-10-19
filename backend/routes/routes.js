// using this part to seperate the routes from the main app.js file

const express = require("express")
const router = express.Router()
const {testGet, testPost, testDelete, testUpdate} = require('../controllers/controller')

router.route('/').get(testGet).post(testPost)
// router.get('/', testGet) //Read

// router.post('/', testPost) //Create
router.route('/:id').put(testUpdate).delete(testDelete)

// router.put('/:id', testUpdate) //Update

// router.delete('/:id', testDelete) //Delete

module.exports = router