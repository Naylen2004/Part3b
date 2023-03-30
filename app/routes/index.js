import {Router} from 'express';
import {DisplayHomePage} from "../controllers/index.js";
import { DisplaySurveyCreatePage} from '../controllers/createNewSurvey.js';

const router = Router();

router.get('/', DisplayHomePage);
router.get('/home', DisplayHomePage);
router.get('/create', DisplaySurveyCreatePage);

export default router;