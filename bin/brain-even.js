import {question} from 'readline-sync'
import {play} from 'src/engine'

export const launch = (username) => {
    const title = 'Answer "yes" if the number is even, otherwise answer "no".'
    play(title, prepareData, username)

}

const prepareData = () => {
    return [
        _makeQuestion(),
        _getAnswer(question)
    ]
}

const _makeQuestion = () => {
    return Math.floor(Math.random() * 100)
    //от 3 до 5 => 
}

const _getAnswer = (question) => {
    const answer = question % 2 === 0
    return _getAnswer(answer)
}

const _getStrAnswer = (answer) => {
    return answer ? 'yes' : 'no'
}