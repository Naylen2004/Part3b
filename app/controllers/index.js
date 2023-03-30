import {UserDisplayName} from "../utilities/index.js";

export function DisplayHomePage(req, res, next){
    res.render('index', {title: 'Home', page: 'home', username: UserDisplayName(req)});
}
export function DisplaySurveyCreatePage(req, res,next) {
    res.render('./content/survey/create', {title: 'Create Survey', page: 'create', username: UserDisplayName(req)}); 
} 