function printHello(){
  console.log('hello');
}

function executeAfterDelay(time, method){
  setTimeout(method, time)
}

console.log(executeAfterDelay(5000, printHello))


