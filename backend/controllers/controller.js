// provides functionality for the routes



const asyncHandler = require('express-async-handler');

const Test = require("../model/testModel")

//@desc Get/Read information using
//@route GET /api/test with
//@access Private
const testGet = asyncHandler(async (req, res) => {
    const test = await Test.find()

    res.status(200).json({test})
})

//@desc Create or set new information using 
//@route POST /api/test with
//@access Private
const testPost = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400)
        throw new Error('Please do add a text field')
    };

    const test = await Test.create({
        text: req.body.text
    })

    res.status(200).json({test})
})

//@desc Updating information using
//@route PUT /api/test/:id with
//@access Private
const testUpdate = asyncHandler(async (req, res) => {
    const test = await Test.findById(req.params.id)

    if(!test) {
        res.status(400)
        throw new Error('Goal no found');
    }

    const updatedTest = await Test.findByIdAndUpdate(req.params.id, req.body,
       {
        new: true,
       } )
    res.status(200).json({updatedTest});
})

//@desc Delete information using
//@route DELETE /api/test/:id with
//@access Private
const testDelete = asyncHandler(async (req, res) => {
    const test = await Test.findById(req.params.id)

    if(!test) {
        res.status(400)
        throw new Error('Goal no found');
    }

    await test.remove()

    res.status(200).json({ id: req.params.id})
})

module.exports = {
    testGet,
    testPost,
    testUpdate,
    testDelete
}