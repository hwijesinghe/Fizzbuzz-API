import express from 'express';
import fizzBuzzData from '../models/fizzbuzz_model.js';

const router = express.Router();

export const getFizzBuzzHome = async (req, res) => {
    try {
        res.status(200).json({
            'error': "How are you this is assignment"
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}


export const getFizzBuzz = async (req, res) => {

    const { userInput } = req.params;
    // console.log(userInput);

    try {

        var computeFuzzBuzzDataRet = fizzBuzzData.computeFuzzBuzzData(userInput, 'fizzbuzz');
        res.status(200).json(computeFuzzBuzzDataRet);

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}



export const getFizz = async (req, res) => {

    const { userInput } = req.params;

    try {

        var computeFuzzBuzzDataRet = fizzBuzzData.computeFuzzBuzzData(userInput, 'fizz');
        res.status(200).json(computeFuzzBuzzDataRet);

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}


export const getBuzz = async (req, res) => {

    const { userInput } = req.params;
    // console.log(userInput);

    try {

        var computeFuzzBuzzDataRet = fizzBuzzData.computeFuzzBuzzData(userInput, 'buzz');
        res.status(200).json(computeFuzzBuzzDataRet);

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}


export default router;