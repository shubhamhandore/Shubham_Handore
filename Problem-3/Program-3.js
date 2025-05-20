const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a number (a): ', input => {
  const a = parseInt(input);
  let limit = a % 2 === 0 ? a - 1 : a;
  let result = [];

  for (let i = 1; i <= limit; i += 2) {
    result.push(i);
  }

  console.log(`Output: ${result.join(', ')}`);
  readline.close();
});
