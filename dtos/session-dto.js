export default class SessionDto {
    id
    user
    date
    laps
    best_lap
    avg_lap
    track_length
    note
    wet

    constructor(model) {
        this.id = model._id
        this.user = model.user._id
        this.date = model.date
        this.laps = model.laps
        this.best_lap = model.best_lap
        this.avg_lap = model.avg_lap
        this.track_length = model.track_length
        this.note = model.note
        this.wet = model.wet
    }
}