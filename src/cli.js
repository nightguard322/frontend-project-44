import rl from 'readline-sync'

export const getName = () => {
  return rl.question('May I have your name? ')
}
