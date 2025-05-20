const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

class Calculator {
  constructor(a, b, operation) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.operation = operation;
  }

  calculate() {
    switch (this.operation) {
      case 1: return this.a + this.b;
      case 2: return this.a - this.b;
      case 3: return this.a * this.b;
      case 4:
        if (this.b === 0) return 'Error: Division by zero';
        return this.a / this.b;
      default: return 'Invalid operation';
    }
  }
}

function showMenu() {
  console.log(`\nChoose an operation:
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exit`);
}

function startCalculator() {
  showMenu();
  readline.question('Enter the operation number (1-5): ', op => {
    const operation = parseInt(op);

    if (operation === 5) {
      console.log('Calculator exited.');
      readline.close();
      return;
    }

    if (operation < 1 || operation > 5) {
      console.log('Invalid operation number. Try again.');
      return startCalculator();
    }

    readline.question('Enter first number (a): ', a => {
      readline.question('Enter second number (b): ', b => {
        const calc = new Calculator(a, b, operation);
        console.log(`Result: ${calc.calculate()}`);
        startCalculator(); // Loop again
      });
    });
  });
}

startCalculator();
