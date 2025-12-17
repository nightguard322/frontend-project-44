import rl from 'readline-sync'

export const play = (title, prepareData, username) => {
  for (let i = 0; i < 3; i++) {
    console.log(title)
    const [answer, question] = prepareData()
    console.log(`Question: ${question}`)
    const userAnswer = rl.question('Your answer:')
    if (userAnswer !== String(answer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.
            Let's try again, ${username}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${username}!`)
}
