import SessionService from "../services/session-service/session-service.js"

export default class SessionController {
    static async create(req, res, next) {
        try {
            const {user, date, laps, best_lap, avg_lap, track_length, note, wet} = req.body
            const session = await SessionService.create(user, date, laps, best_lap, avg_lap, track_length, note, wet)
            return res.status(201).json(session)
        } catch (e) {
            next(e)
        }
    }

    static async update(req, res, next) {
        try {
            const newSession = req.body
            const session_id = req.params.session_id
            const updatedSession = await SessionService.update(session_id, newSession)
            return res.status(200).json(updatedSession)
        } catch (e) {
            next(e)
        }
    }

    static async delete(req, res, next) {
        try {
            const session_id = req.params.session_id
            const deletedSession = await SessionService.delete(session_id)
            return res.status(200).json(deletedSession)
        } catch (e) {
            next(e)
        }
    }

    static async readAll() {

    }

    static async readById() {

    }

}