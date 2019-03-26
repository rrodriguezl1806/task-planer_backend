import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const taskModelSchema = new Schema({
    name: String,
    description: String,
    calification: {
        type: String,
        enum: [
            'Urgent and important',
            'Not urgent, but important',
            'Not important, but urgent',
            'Not Urgent, nor important'
        ]
    },
    date: Date,
    startHours: Date,
    endHours: Date,
    status: {
        type: String, 
        enum: ['created', 'completed', 'unfinished'],
        default: 'created'
    },
    place: String,
});