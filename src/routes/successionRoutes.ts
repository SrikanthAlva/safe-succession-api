import express from 'express'
import {
    getSucessions,
    createSuccession,
    getSuccession,
    updateSuccession,
    deleteSuccession,
} from '../controllers/successionControllers'

const router = express.Router()

// router.use(validateToken);
router.route('/').get(getSucessions).post(createSuccession)

router.route('/:id').get(getSuccession).put(updateSuccession).delete(deleteSuccession)

module.exports = router
