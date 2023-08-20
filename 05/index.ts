const spell = (word: string) => {
  let spelledWord = ''
  word.split('').forEach((letter, index) => {
    spelledWord += index < (word.split('').length - 1) ? `${letter}-` : letter
  })
  return console.log(spelledWord)
}

spell('hacker')