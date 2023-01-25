function notifyByEmail(email){
  return `Email sent to: ${email}`;
}

function notifyByText(number){
   return `Text sent to: ${number}`;
}

function notify(contact_method, method){
  return method(contact_method);
}

console.log(notify('hello@makers.tech.test', notifyByEmail))
console.log(notify('+10000000000', notifyByText))