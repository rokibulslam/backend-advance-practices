/*
==> for error handling in async-await we need to use try-catch;
==> Benifit of error handling=> code will not break on run time.
*/
async function getData() {
    try {
        // undefined.find();
        const emailError = new Error("Email Already Exists!");
        throw emailError;

    } catch (error) {
        errorHandle(error)
    }
}
getData();

/*
------------------Global Error Handler----------------------
==> Error has some property such as name, message, stack.
==> We need to store error for future investigation, solution. For this we use logger.
==> We send generic message to user 
*/
function errorHandle(error) {
    const { name, message, stack } = error;
    console.log(name, message);
}
console.log("done")