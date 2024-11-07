import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './db/db.js';

const app = express();
dotenv.config();
connectToDb();


app.get('/', (req, res) => {
    res.send('Hello from the server side!');
});

export default app;