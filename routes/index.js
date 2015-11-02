var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

router.get('/', quizController.index);
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;
