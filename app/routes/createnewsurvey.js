
import {newSurvey} from '../models/surveyNewModel.js';
import { DisplaySurveyCreatePage} from '../controllers/createNewSurvey.js';
//import {DisplaySurveyCreatePage} from "../controllers/index.js";
//router.get('/create', DisplaySurveyCreatePage);
import { AuthGuard } from '../utilities/index.js';

import {Router} from 'express';

const router = Router();

//router.get('/createNewSurvey', DisplaySurveyCreatePage);  

// GET route to display the form populated with the survey results
router.get('/createNewsurvey', async (req, res) => {
  try {
    const newestsurvey = await newSurvey.find({});
    res.render('createnewsurvey', { newestsurvey }); // Pass the survey results to the EJS template
  } catch (err) {
    console.log(err);
    res.send('Error retrieving newestsurvey results.');
  }
});

// GET route for results
router.get('/results', async (req, res) => {
  try {
    const newestsurvey = await newSurvey.find({});
    res.render('results', { newestsurvey });
  } catch (err) {
    console.log(err);
    console.log("hello world");
    res.redirect('/');
  }
});

// POST route for submitting survey
router.post('/submit', async (req, res) => {
  const newsurvey = new newSurvey({
    quiz: req.body.quiz,
    questions: req.body.questions.map(question => {
      const options = typeof question.options === 'string' ? question.options.split(',') : question.options;
      return {
        question: question.question,
        options: options,
        response: question.response,
      };
    }),
  });
  try {
    await newsurvey.save();
    res.redirect('/viewnewsurvey');
  } catch (err) {
    console.log(err);
    res.redirect('/viewnewsurvey');
  }
});

// router.get('/createNewSurvey', DisplayNewSurveyPage);
// router.get('/viewresults', DisplayNewSurveyPage);
export default router;


router.get('/survey-create', AuthGuard,DisplaySurveyCreatePage );

// router.get('/survey-create', (req, res) => {
//   const username = req.user.username; // assuming you are using Passport.js for authentication
//  // res.render('content/survey/create', { username: username });
//  router.get('/survey-create', DisplaySurveyCreatePage )
// });

//router.post('/survey-create', ProcessSurveyCreatePage);