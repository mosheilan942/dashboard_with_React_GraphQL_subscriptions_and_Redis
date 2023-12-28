import mongoose, { Schema, model, connect } from "mongoose";
import { config } from "dotenv";
config()



const connectionString = process.env.CONNECTION_STRING!;


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

export default async function checkConnection() {
    try {
        
        const test = await connect(connectionString)
        console.log('Connected to MongoDB');
        console.log(test.connection.readyState);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);

    }
}



