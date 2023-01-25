function lowercaseMessage(message) {
  return message.toLowerCase();
}

function transform(message, something) {
  return something(message);
}

console.log(transform('WORD', lowercaseMessage))