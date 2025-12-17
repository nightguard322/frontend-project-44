#! /usr/bin/env node

import { play } from '../src/engine.js'
import { getName } from '../src/cli.js'

console.log('Welcome to the Brain Games!')
const username = getName()
console.log(`Hello, ${username}`)

const title = 'Answer "yes" if the number is even, otherwise answer "no".'
const prepareData = () => {
  return _getData()
}

const _makeQuestion = () => {
  return Math.floor(Math.random() * 100)
}

const _getData = () => {
  const question = _makeQuestion()
  const answer = question % 2 === 0
  return [
    _getStrAnswer(answer),
    question,
  ]
}

const _getStrAnswer = (answer) => {
  return answer ? 'yes' : 'no'
}

play(title, prepareData, username)
