// provides functionality for the routes

const asyncHandler = require('express-async-handler');

//@desc Get/Read information using
//@route GET /api/test with
//@access Private
const testGet = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'This is a test message for getting data'})
})

//@desc Create or set new information using 
//@route POST /api/test with
//@access Private
const testPost = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400)
        throw new Error('Please do add a text field')
    };

    res.status(200).json({ message: 'This is a test message for creating a post'})
})

//@desc Updating information using
//@route PUT /api/test/:id with
//@access Private
const testUpdate = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `This is a test message for updating ${req.params.id}`})
})

//@desc Delete information using
//@route DELETE /api/test/:id with
//@access Private
const testDelete = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `This is a test message for deleting ${req.params.id}`})
})

module.exports = {
    testGet,
    testPost,
    testUpdate,
    testDelete
}