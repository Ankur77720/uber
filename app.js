const dotEnv = require('dotenv');
// Load environment variables
dotEnv.config();
const express = require('express');
const app = express();
const connectToDB = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const cookieParser = require('cookie-parser');

const dbConnection = connectToDB();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/users', userRoutes);
app.use('/captains', captainRoutes);


module.exports = app;