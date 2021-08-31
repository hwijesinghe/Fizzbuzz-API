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

        if (0 <= userInput && userInput <= 100) {

            var result = {};                
            var output = [];
            var count = 0;
            
            for (var i = 0; i <= userInput; i++) {

                if (i !== 0 && i % 3 === 0 && i % 5 == 0) {
                    output[i] = "FizzBuzz";
                    count += 1;  
                } else {
                    output[i] = -i;
                }
            }

            result["count"] = count;
            result["range"] = parseInt(userInput);
            result["type"] = "fizzbuzz"; 

        } else {
            var result = {
                "error": "range should be between 0 and 100"
            };
            // res.status(200).json(result);
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}



export const getFizz = async (req, res) => {

    const { userInput } = req.params;

    try {

        if (0 <= userInput && userInput <= 100) {
            
            var result = {};                
            var output = [];
            var count = 0;
            
            for (var i = 0; i <= userInput; i++) {

                if (i !== 0 && i % 3 === 0) {
                    output[i] = "Fizz";
                    count += 1;  
                } else {
                    output[i] = -i;
                }
            }

            result["count"] = count;
            result["range"] = parseInt(userInput);
            result["type"] = "fizz";

            //{ “count”: 3, “range”: 10, “type”: “fizz” }

        } else {
            var result = {
                "error": "range should be between 0 and 100"
            };
        }

        res.status(200).json(result);

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
        
        
        // *************    This code moved to the model  ***********/ 
        // console.log(computeFuzzBuzzDataRet);

        // if (0 <= userInput && userInput <= 100) {

        //     var result = {};                
        //     var output = [];
        //     var count = 0;
            
        //     for (var i = 0; i <= userInput; i++) {

        //         if (i !== 0 && i % 5 === 0) {
        //             output[i] = "Buzz";
        //             count += 1;  
        //         } else {
        //             output[i] = -i;
        //         }
        //     }

        //     result["count"] = count;
        //     result["range"] = parseInt(userInput);
        //     result["type"] = "buzz";

        //     //{ “count”: 3, “range”: 10, “type”: “buzz” }

        // } else {
        //     var result = {
        //         "error": "range should be between 0 and 100"
        //     };
        //     // res.status(200).json(result);
        // }
        

        res.status(200).json(computeFuzzBuzzDataRet);

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}





export default router;