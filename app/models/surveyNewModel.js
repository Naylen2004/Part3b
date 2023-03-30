
import mongoose from 'mongoose';

const SurveySchema = new mongoose.Schema({
  quiz: {
    type: String,
    required: true,
  },
  questions: [{
    question: {
      type: String,
      required: true,
    },
    options: [{
      type: String,
      required: true,
    }],
    response: {
      type: String,
      required: false,
    },
  }],
});

const newSurvey = mongoose.model('newSurvey', SurveySchema);

export { newSurvey };

