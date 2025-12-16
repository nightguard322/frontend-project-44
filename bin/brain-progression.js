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
    return Array.from(
        {length: 10},
        () => Math.floor(Math.random() * 100)
    )
}

const _getData = () => {
    const [num1, num2] = [_getNumber(), _getNumber()]
    return [
        _getStrAnswer(num1, num2),
        `${num1} ${num2}`
    ]
}

const _getStrAnswer = (num1, num2) => {
    while (num2 > 0) {
        [num1, num2] = [num2, num1 % num2]
    }
    return num1
}

play(title, prepareData, username)