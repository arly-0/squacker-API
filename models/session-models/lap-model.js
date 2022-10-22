import {Schema, model} from 'mongoose'

const LapSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    session: {type: Schema.Types.ObjectId, ref: 'Session', required: true},
    lap_number: {type: Number, required: true},
    lap_time: {type: String, required: true}
}, {timestamps: true})

export default model('Lap', LapSchema)
