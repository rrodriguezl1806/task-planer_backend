import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Definiendo el esquema
export const taskModelSchema = new Schema({
    description: String,
    calification: String,
    place: String,
    date: Date,
    userName: String,
    email: String
    // category: { type: String, enum: [ 'computers', 'phones', 'accesories'] }
});