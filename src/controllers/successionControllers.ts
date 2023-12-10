import asyncHandler from 'express-async-handler'
import { Succession } from '../models/SuccessionModel'

//@desc Get all successions
//@route GET /api/successions
//@access public
export const getSucessions = asyncHandler(async (req: any, res: any) => {
    const successions = await Succession.find()
    res.status(200).json(successions)
})

//@desc create new succession
//@route POST /api/successions
//@access public
export const createSuccession = asyncHandler(async (req: any, res: any) => {
    const { creator, executor, willCID, nominees } = req.body
    if (!creator || !executor || !willCID || !nominees.length) {
        res.status(400)
        throw new Error('Mandatory Fields are missing')
    }

    const succession = await Succession.create({
        creator,
        executor,
        willCID,
        nominees,
    })

    res.status(201).json(succession)
})

//@desc get succession by successionId
//@route GET /api/successions/:id
//@access public
export const getSuccession = asyncHandler(async (req: any, res: any) => {
    const succession = await Succession.findById(req.params.id)
    if (!succession) {
        console.log('Error')
        res.status(404)
        throw new Error('Succession Not Found')
    }
    res.status(200).json(succession)
})

//TODO: Update succession is not implemented correctly. Update this to cancel the succession and update the DB.
//@desc update succession by id
//@route PUT /api/successions/:id
//@access public
export const updateSuccession = asyncHandler(async (req: any, res: any) => {
    const succession = await Succession.findById(req.params.id)
    if (!succession) {
        res.status(404)
        throw new Error('Succession Not Found')
    }

    const updatedSuccession = await Succession.updateOne(req.params.id, res.body, { new: true })
    res.status(200).json(updatedSuccession)
})

//@desc delete succession by id
//@route PUT /api/successions/:id
//@access private
export const deleteSuccession = asyncHandler(async (req: any, res: any) => {
    // console.log("Inside Delete Succession")
    const succession = await Succession.findById(req.params.id)
    if (!succession) {
        res.status(404)
        throw new Error('Succession Not Found')
    }
    await Succession.deleteOne({ _id: req.params.id })
    res.status(200).json(succession)
})
