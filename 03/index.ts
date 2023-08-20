const numbers: number[] = [1, 5, 2]

const table = (numbers: number[]) => {
  let result = '';
  numbers.forEach((value) => {
    for (let i = 0; i <= 10; i++) {
      result += `${value} x ${i} = ${value * i} \n`
    }
    result += `---------------\n \n`
  })
  console.log(result)
}

table(numbers)