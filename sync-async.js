// Here node js working as a asynchronous way. Third console will excute before 2nd console. This is Asynchronus

console.log("Welcome to ACC");
// setTimeout(() => {
//    console.log("I'm Excited"); 
// }, 1000);

setTimeout(() => {
    setTimeout(() => {
        const user = { id: 1 };
        setTimeout(() => {
            const products = [{}, {}, {}];
            setTimeout(() => {
                const prices = [];
            }, 1000);
        }, 500);
    }, 1000);
}, 1000);
We can not access any variable's value from asynchronus function. If we need this value we will use call back function inside the call back function. And this will create callback hell. For this reason we use Promises.
console.log("Hope You Are Well");
