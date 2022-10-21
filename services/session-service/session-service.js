import SessionModel from "../../models/session-models/session-model.js"

export default class SessionService {
    static async create(date, laps, best_lap, avg_lap, note, wet) {
        return await SessionModel.create({date, laps, best_lap, avg_lap, note, wet})
    }
}