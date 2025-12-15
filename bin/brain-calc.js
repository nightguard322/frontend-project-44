#! /usr/bin/env node

import {play} from '../src/engine.js'
import { getName } from '../src/cli.js'
import { question } from 'readline-sync'

console.log('Welcome to the Brain Games!')
const username = getName()
console.log(`Hello, ${username}`)

const title = 'Answer "yes" if the number is even, otherwise answer "no".'
const prepareData = () => {
    return _getData()
}

const _getNumber = () => {
    return Math.floor((Math.random() * 10) + 1)
}

const getRandom = (arr) => {
    const randomKey = Math.floor(Math.random() * arr.length)
    return arr[randomKey]
}
const _getData = () => {
    const [num1, num2] = [_getNumber(), _getNumber()]
    const actions = ['+', '-', '*', '/']
    const action = getRandom(actions)
    return [
        _getStrAnswer(num1, num2, action),
        `${num1} ${action} ${num2}`
    ]
}

const _getStrAnswer = (num1, num2, action) => {
    switch (action) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            console.log('Error occured')
            break
    }
}

play(title, prepareData, username)