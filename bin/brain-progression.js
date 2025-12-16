#! /usr/bin/env node

import {play} from '../src/engine.js'
import { getName } from '../src/cli.js'
import { question } from 'readline-sync'

console.log('Welcome to the Brain Games!')
const username = getName()
console.log(`Hello, ${username}`)

const title = 'Find the greatest common divisor of given numbers.'
const prepareData = () => {
    return _getData()
}

const _getSeries = () => {
    let diff = Math.floor(Math.random() * 10)
    return Array.from(
        {length: 10},
        (_, i) => i + diff)
    )
}

const _getData = () => {
    const interval = _getSeries()
    const randomKey = Math.floor(Math.random() * interval.length)
    const missingValue = interval[randomKey]

}

const _getStrAnswer = (num1, num2) => {
    while (num2 > 0) {
        [num1, num2] = [num2, num1 % num2]
    }
    return num1
}

play(title, prepareData, username)