const fs = require('fs')
const questions = [
  {
    order: 'D',
    type: 'checkbox',
    question:
      'What kind of language is Javascript? (remember, more than one (or none) options are possible)',
    choices: [
      'Strongly typed',
      'Weakly typed',
      'Dynamic',
      'Prototype based',
      'Functional',
      'Static',
      'Structured'
    ],
    textQuestion: null,
    answerIndexes: [],
    textAnswer: null
  },
  {
    order: 'E',
    type: 'checkbox',
    question: 'Mark which of the following characteristics Javascript presents',
    choices: [
      'Polymorphism',
      'Inheritance',
      'Encapsulation',
      'Dynamic binding (The ability to switch an object’s method at runtime)',
      'Open recursion (Characteristic that implies that the “this” reference is dynamically bound)'
    ],
    textQuestion: null,
    answerIndexes: [],
    textAnswer: null
  },
  {
    order: 'F',
    type: 'radio',
    question: 'Is Javascript Object Oriented?',
    choices: ['Yes', 'No'],
    textQuestion: 'Briefly describe why:',
    answerIndexes: [],
    textAnswer: null
  },
  {
    order: 'G',
    type: 'checkbox',
    question: 'What does a closure allow in Javascript?',
    choices: [
      'Encapsulating code inside the scope of a function',
      'Allows declared variables to be accessible inside child scopes and inaccessible from parent scopes.',
      'Allows declared variables to be accessible inside parent scopes and inaccessible from child scopes.',
      'Currying',
      'Event Bubbling'
    ],
    textQuestion: null,
    answerIndexes: [],
    textAnswer: null
  },
  {
    order: 'H',
    type: 'checkbox',
    question: 'How would you deal with global scope in Javascript?',
    choices: [
      'Encapsulating components in functions',
      'Using AMD or CommonJS Modules',
      'Putting all the components under a same object',
      'Using global variables'
    ],
    textQuestion: null,
    answerIndexes: [],
    textAnswer: null
  }
]
const answers = [
  {
    order: 'D',
    answerIndexes: [1, 2, 3, 4]
  },
  {
    order: 'E',
    answerIndexes: [0, 1, 2, 3, 4]
  },
  {
    order: 'F',
    answerIndexes: [0],
    textAnswer:
      'JavaScript can function as a procedural and an object oriented language. Javascript provides some features to implement object-oriented programs, such as polymorphism, encapsulation, inheritance (via prototyping), so it is a prototype-based language (not a class-based object-oriented). However, a language can be OO if it supports object even without classes. So, Javascript could be considered OOP language.'
  },
  {
    order: 'G',
    answerIndexes: [0, 1, 3, 4]
  },
  {
    order: 'H',
    answerIndexes: [0, 1]
  }
]

const getFileQuestion = ({ result = [], filename, order }) => {
  const source = `./src/SourceCode/${filename}`
  try {
    fs.accessSync(source, fs.constants.R_OK)
    const data = fs.readFileSync(source, 'utf8')
    return [
      ...result,
      {
        order: order,
        type: 'text',
        data,
        textAnswer: null
      }
    ]
  } catch (error) {
    throw error
  }
}
const getFileAnswer = ({ result = [], filename, order }) => {
  const source = `./src/SourceCode/${filename}`
  try {
    fs.accessSync(source, fs.constants.R_OK)
    const data = fs.readFileSync(source, 'utf8')
    return [
      ...result,
      {
        order: order,
        textAnswer: data
      }
    ]
  } catch (error) {
    throw error
  }
}

const getQuestions = async (req, res) => {
  let result = []
  return new Promise((resolve) =>
    setTimeout(() => {
      try {
        result = [...getFileQuestion({ filename: 'question_a.js', order: 'A' })]
        result = [
          ...getFileQuestion({ result, filename: 'question_b.js', order: 'B' })
        ]
        result = [
          ...getFileQuestion({ result, filename: 'question_c.js', order: 'C' })
        ]
      } catch (error) {
        resolve(res.status(404).json({ error }))
      }
      result = [...result, ...questions]
      resolve(res.status(200).json(result))
    }, 1000)
  )
}

const getQuestion = async (req, res) => {
  const result = questions.find(
    (question) =>
      question.order.toLowerCase() === req.params.order.toLowerCase()
  )
  return new Promise((resolve) =>
    setTimeout(() => {
      if (result) resolve(res.status(200).json(result))
      else resolve(res.status(404).json({ error: 'Question not found!' }))
    }, 1000)
  )
}

const getAnswers = async (req, res) => {
  let result = []
  return new Promise((resolve) =>
    setTimeout(() => {
      try {
        result = [...getFileAnswer({ filename: 'answer_a.js', order: 'A' })]
        result = [
          ...getFileAnswer({ result, filename: 'answer_b.js', order: 'B' })
        ]
        result = [
          ...getFileAnswer({ result, filename: 'answer_c.js', order: 'C' })
        ]
      } catch (error) {
        resolve(res.status(404).json({ error }))
      }
      result = [...result, ...answers]
      resolve(res.status(200).json(result))
    }, 1000)
  )
}

const getAnswer = async (req, res) => {
  const result = answers.find(
    (answer) => answer.order.toLowerCase() === req.params.order.toLowerCase()
  )
  return new Promise((resolve) =>
    setTimeout(() => {
      if (result) resolve(res.status(200).json(result))
      else resolve(res.status(404).json({ error: 'Answer not found!' }))
    }, 1000)
  )
}

const getQuestionCode = async (req, res) => {
  const file = `./src/SourceCode/${req.params.file?.toLowerCase()}`
  return new Promise((resolve) =>
    setTimeout(() => {
      if (file) {
        try {
          fs.accessSync(file, fs.constants.R_OK)
          const data = fs.readFileSync(file, 'utf8')
          resolve(res.status(200).json(data))
        } catch (error) {
          resolve(res.status(404).json({ error }))
        }
      } else
        resolve(res.status(404).json({ error: 'Question Code not found!' }))
    }, 1000)
  )
}

module.exports = {
  getQuestions,
  getAnswers,
  getQuestion,
  getAnswer,
  getQuestionCode
}
