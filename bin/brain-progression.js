#! /usr/bin/env node

import { play } from '../src/engine.js'
import { getName } from '../src/cli.js'

console.log('Welcome to the Brain Games!')
const username = getName()
console.log(`Hello, ${username}`)

const title = 'What number is missing in the progression?'
const prepareData = () => {
  return _getData()
}

const _getRandomNumber = () => {
  return Math.floor(Math.random() * 10)
}

const _getSeries = () => {
  const [start, diff] = Array.from(
    { length: 2 }, _getRandomNumber,
  )
  return Array.from(
    { length: 10 },
    (_, index) => start + (index * diff))
}

const _getData = () => {
  const series = _getSeries()
  const randomKey = Math.floor(Math.random() * series.length)
  const missingValue = series[randomKey]
  const question = [
    ...series.slice(0, randomKey),
    '..',
    ...series.slice(randomKey + 1),
  ].join(' ')
  return [missingValue, question]
}

play(title, prepareData, username)
