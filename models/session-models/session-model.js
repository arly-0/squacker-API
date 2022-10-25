import {Schema, model} from 'mongoose'

const SessionSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    date: {type: Date, required: true, default: () => null},
    laps: [{type: new Schema({
            lap_number: {type: Number, required: true},
            lap_time: {type: String, required: true}
        }, {_id: false}), required: true}],
    best_lap: {type: String, default: () => null},
    avg_lap: {type: String, default: () => null},
    track_length: {type: Number, default: () => null},
    note: {type: String, trim: true, maxLength: 150, default: null},
    wet: {type: Boolean, default: () => false}
}, {timestamps: true})

export default model('Session', SessionSchema)