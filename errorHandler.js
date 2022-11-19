function errorHandler(error) {
  const { name, message, stack } = error;
    console.log(name, message);
    // logger.error({
    //     name,
    //     message,
    //     stack,
    //     route
    // })
}
console.log("done");
function two() {
  console.log("Two");
}
two();

module.exports.three = function three() {
  console.log("three");
}
three();
//module.exports = errorHandler; //default export
module.exports.errorHandler = errorHandler;   //name exports
module.exports.two = two;

// OR
/*
module.exports = {
  errorHandler,
  two
}
*/

// ES6 style
// module.exports = { errorHandler, two };
console.log(module);