/**
 * Program that displays a message, takes user name
 * and then ends after displaying a final message
 */

// Displays the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Listens to user input on stdin
process.stdin.setEncoding('utf8');

// Capture the input
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);

  // End the program
  console.log('This important software is now closing');
  process.exit();
});
