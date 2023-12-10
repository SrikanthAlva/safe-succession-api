import { constants } from '../constants'

export const errorHandler = (err: any, req: any, res: any, next: any) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: 'Validation Failed',
                message: err.message,
                stackTrace: err.stackTrace,
            })
            break
        case constants.NOT_FOUND:
            res.json({ title: 'Not Found', message: err.message, stackTrace: err.stackTrace })
            break
        case constants.UNAUTHORIZED:
            res.json({
                title: 'Unauthorized Access',
                message: err.message,
                stackTrace: err.stackTrace,
            })
            break
        case constants.FORBIDDEN:
            res.json({ title: 'Forbidden', message: err.message, stackTrace: err.stackTrace })
            break
        case constants.SERVER_ERROR:
            res.json({ title: 'Server Error', message: err.message, stackTrace: err.stackTrace })
            break
        default:
            console.log('No Errors, All good')
            break
    }
}
