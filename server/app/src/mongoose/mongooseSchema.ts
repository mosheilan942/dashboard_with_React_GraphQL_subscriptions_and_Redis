import { Schema, InferSchemaType } from 'mongoose';

// const conditionSchema = new Schema({
//     text: { type: String, required: true },
//     icon: { type: String, required: true },
//     code: { type: Number, required: true }
// });

// const currentSchema = new Schema({
//     last_updated_epoch: { type: Number, required: true },
//     last_updated: { type: String, required: true },
//     temp_c: { type: Number, required: true },
//     temp_f: { type: Number, required: true },
//     is_day: { type: Number, required: true },
//     condition: { type: conditionSchema, required: true },
//     wind_mph: { type: Number, required: true },
//     wind_kph: { type: Number, required: true },
//     wind_degree: { type: Number, required: true },
//     wind_dir: { type: String, required: true },
//     pressure_mb: { type: Number, required: true },
//     pressure_in: { type: Number, required: true },
//     precip_mm: { type: Number, required: true },
//     precip_in: { type: Number, required: true },
//     humidity: { type: Number, required: true },
//     cloud: { type: Number, required: true },
//     feelslike_c: { type: Number, required: true },
//     feelslike_f: { type: Number, required: true },
//     vis_km: { type: Number, required: true },
//     vis_miles: { type: Number, required: true },
//     uv: { type: Number, required: true },
//     gust_mph: { type: Number, required: true },
//     gust_kph: { type: Number, required: true }
// });

// const locationSchema = new Schema({
//     name: { type: String, required: true },
//     region: { type: String, required: true },
//     country: { type: String, required: true },
//     lat: { type: Number, required: true },
//     lon: { type: Number, required: true },
//     tz_id: { type: String, required: true },
//     localtime_epoch: { type: Number, required: true },
//     localtime: { type: String, required: true }
// });

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });


export type User = InferSchemaType<typeof userSchema>

export default userSchema

