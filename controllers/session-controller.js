import SessionService from "../services/session-service/session-service.js"
import ApiError from "../exceptions/api-error.js"

export default class SessionController {
    static async create(req, res, next) {
        try {
            const {date, laps, best_lap, avg_lap, note, wet} = req.body
            const session = await SessionService.create(date, laps, best_lap, avg_lap, note, wet)
            return res.json(session)
        } catch (e) {
            next(e)
        }
    }
}