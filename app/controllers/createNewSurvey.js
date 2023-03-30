 
import express from 'express';
const { urlencoded, json } = express;
import {UserDisplayName} from "../utilities/index.js";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
//import { newSurvey } from '../models/surveyNewModel.js';
const app = express();
const router = express.Router();

app.get('/', (req, res) => {
  res.render('index');
});
//DisplayNewSurveyPage
// Make sure this function is defined correctly
export function DisplayNewSurveyPage(req, res, next) {
  res.render('createnewsurvey');
}

// Remove the route definitions from this file as mentioned in the previous response

// export function DisplaySurveyCreatePage(req, res, next){
//     res.render('create', {title: 'Create a Survey', page: 'survey/edit', survey: {}})
// }
export function DisplaySurveyCreatePage(req, res,next) {
    res.render('./content/survey/create', {title: 'Create Survey', page: 'create',username: UserDisplayName(req)}); 
} 

export default app;
