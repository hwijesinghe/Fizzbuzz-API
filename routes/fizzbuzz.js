import express from 'express';

import { getFizzBuzzHome, getFizzBuzz, getFizz, getBuzz } from '../controllers/fizzbuzz.js';

const router = express.Router();

//http://localhost:8000/
//http://localhost:8000/fizzbuzz/58


router.get('/', getFizzBuzzHome);
router.get('/fizzbuzz/:userInput/', getFizzBuzz);
router.get('/fizz/:userInput/', getFizz);
router.get('/buzz/:userInput/', getBuzz);
// router.get('/fizzbuzz/:id/', getFizzBuzz);


export default router;