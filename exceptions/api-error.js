export default class ApiError extends Error {
    status
    errors

    constructor(status, message, errors = []) {
        super(message)
        this.status = status
        this.errors = errors
    }

    static UnauthorizedError() {
        return new ApiError(401, 'User is unauthorized')
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors)
    }

    static NotFound(resourseName) {
        return new ApiError(404, `${resourseName} is not found`)
    }
}