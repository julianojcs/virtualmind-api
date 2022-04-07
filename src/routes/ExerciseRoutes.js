const express = require('express')
const router = express.Router()
const {
  getQuestionCode,
  getQuestions,
  getAnswers,
  getQuestion,
  getAnswer
} = require('../controller/ExerciseController')

router.get('/code/:file', getQuestionCode)
router.get('/questions', getQuestions)
router.get('/questions/:order', getQuestion)
router.get('/answers', getAnswers)
router.get('/answers/:order', getAnswer)

module.exports = router