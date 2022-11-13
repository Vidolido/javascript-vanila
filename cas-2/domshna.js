const num1 = 25;
const num2 = 16;
const operation = '%' // + - * / %

switch (operation) {
  case '+': {
    console.log(num1 + num2)
    break
  }
  case '-': {
    console.log(num1 - num2)
    break
  }
  case '*': {
    console.log(num1 * num2)
    break
  }
  case '/': {
    if (num2 === 0) {
      console.log('Cannot divide by zero')
    } else console.log(num1 / num2)

    break
  }
  case '%': {
    console.log(num1 % num2)
    break
  }
  default: {
    console.log('Invalid operation')
    break
  }
}

