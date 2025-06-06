class Calculator {
  constructor(value) {
    this.result = value
  }

  add(value) {
    this.result += value
    return this
  }

  subtract(value) {
    this.result -= value
    return this
  }

  multiply(value) {
    this.result *= value
    return this
  }

  divide(value) {
    if (value === 0) this.result = 'Division by zero is not allowed'
    else {
      this.result /= value
    }

    return this
  }

  power(value) {
    this.result = Math.pow(this.result, value)
    return this
  }

  getResult() {
    return this.result
  }
}

console.log(new Calculator(10).add(5).divide(0).getResult())
