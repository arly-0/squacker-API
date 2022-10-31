import SessionService from "../services/session-service/session-service.js"
import ApiError from "../exceptions/api-error.js"
import UserModel from "../models/auth-models/user-model.js";

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

    static async delete() {

    }

    static async getAll() {

    }

    static async getById() {

    }

}