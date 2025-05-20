const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter the number of terms (a): ', input => {
  const a = parseInt(input);
  let result = [];

  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }

  console.log(`Output: ${result.join(', ')}`);
  readline.close();
});
