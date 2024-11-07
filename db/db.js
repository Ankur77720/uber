import mongoose from "mongoose";


function connectToDb() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected to database");
    }).catch(err => {
        console.log("Error connecting to database", err);
    })
}


export default connectToDb;