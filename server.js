import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import fizzbuzzRoutes from './routes/fizzbuzz.js';

const app = express();
app.use(cors());

dotenv.config({path:'config.env'});
// console.log(PORT);

const PORT = process.env.PORT || 8008;

app.use('/', fizzbuzzRoutes);

app.listen(PORT, () => {
    console.log(`FizzBuzz API Server is running on port http://localhost:${PORT}`)
});