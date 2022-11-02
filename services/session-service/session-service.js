import SessionModel from "../../models/session-models/session-model.js"
import SessionDto from "../../dtos/session-dto.js";
import ApiError from "../../exceptions/api-error.js";
import {isValidObjectId} from "mongoose";

export default class SessionService {
    static async create(user, date, laps, best_lap, avg_lap, track_length, note, wet) {
        const session = await SessionModel.create({user, date, laps, best_lap, avg_lap, track_length, note, wet})
        return new SessionDto(session)
    }

    static async update(session_id, newSession) {
        if(!isValidObjectId(session_id)) {
            throw ApiError.BadRequest('Invalid format of ID', [])
        }
        if(!newSession) {
            throw ApiError.BadRequest('No update data provided', [])
        }
        const session = await SessionModel.findById(session_id)
        if(!session) {
            throw ApiError.NotFound('Session')
        }
        const updatedSession = await SessionModel.findByIdAndUpdate(session_id, newSession, {returnDocument: 'after'})
        return new SessionDto(updatedSession)
    }

    static async delete(session_id) {
        if(!isValidObjectId(session_id)) {
            throw ApiError.BadRequest('Invalid format of ID', [])
        }
        const session = await SessionModel.findById(session_id)
        if(!session) {
            throw ApiError.NotFound('Session')
        }
        const deletedSession = await SessionModel.findByIdAndDelete(session_id)
        return new SessionDto(deletedSession)
    }

    static async getAllByUser(user_id) {
        if(!isValidObjectId(user_id)) {
            throw ApiError.BadRequest('Invalid format of ID', [])
        }
        const sessions = await SessionModel.find({user: user_id}).exec()
        if(!sessions) {
            throw ApiError.NotFound('Sessions')
        }
        return sessions.map(session => new SessionDto(session))
    }

    static async getDetailsByID(sesion_id) {
        if(!isValidObjectId(sesion_id)) {
            throw ApiError.BadRequest('Invalid format of ID', [])
        }
        const session = await SessionModel.findById(sesion_id).exec()
        if(!session) {
            throw ApiError.NotFound('Session')
        }
        return new SessionDto(session)
    }
}

