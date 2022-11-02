import SessionService from "../services/session-service/session-service.js"
import {validationResult} from "express-validator";
import ApiError from "../exceptions/api-error.js";

export default class SessionController {
    static async create(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation error', errors.array()))
            }

            const {user, date, laps, best_lap, avg_lap, track_length, note, wet} = req.body
            const session = await SessionService.create(user, date, laps, best_lap, avg_lap, track_length, note, wet)
            return res.status(201).json(session)
        } catch (e) {
            next(e)
        }
    }

    static async update(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation error', errors.array()))
            }

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

    static async getAllByUser(req, res, next) {
        try {
            const user_id = req.params.user_id
            const sessions = await SessionService.getAllByUser(user_id)
            return res.status(200).json(sessions)
        } catch (e) {
            next(e)
        }
    }

    static async getDetailsByID(req, res, next) {
        try {
            const session_id = req.params.session_id
            const session = await SessionService.getDetailsByID(session_id)
            return res.status(200).json(session)
        } catch (e) {
            next(e)
        }
    }

}