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
            throw ApiError.BadRequest('Invalid format of session id', [])
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

    static async delete() {

    }

    static async getAll() {

    }

    static async getById() {

    }
}

