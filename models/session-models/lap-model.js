import {Schema, model} from 'mongoose'

const LapSchema = new Schema({
    lap_number: {type: Number, required: true},
    lap_time: {type: String, required: true}
})

export default model('Lap', LapSchema)
