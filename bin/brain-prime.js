#! /usr/bin/env node

import { play } from '../src/engine.js'
import { getName } from '../src/cli.js'

console.log('Welcome to the Brain Games!')
const username = getName()
console.log(`Hello, ${username}`)

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const prepareData = () => {
  return _getData()
}

const _getRandomNumber = () => {
  return Math.floor(Math.random() * 10)
}

const _isEven = (num) => {
  return num % 2 === 0
}

const _isPrime = (num) => {
  if (num < 2) {
    return false
  }
  if (num === 2) {
    return true
  }
  if (_isEven(num)) {
    return false
  }
  for (let i = 3; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const _getStrAnswer = (answer) => {
  return answer ? 'yes' : 'no'
}

const _getData = () => {
  const question = _getRandomNumber()
  const answer = _isPrime(question)
  return [_getStrAnswer(answer), question]
}

play(title, prepareData, username)
