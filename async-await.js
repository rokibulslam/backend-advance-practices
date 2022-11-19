/*
==> Callback is very nesting, create callback hell
==> By Promise we can get result by then, catch method. It still nesting.
==> async/await work sequencely like synchronus code.
*/
/*
==> We need to use await into a asynchronus function.
*/

// asynchronus work like database
const promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve("Success!")
    }, 1000);
});

// get data from database/asyncronus function 
async function getData() {
    const res = await promise;
    console.log(res);
};
getData();

// then method vs async-await 
fetch("URL")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
// Or
async function getUser() {
  const res = await fetch("URL"); //Like synchronus code
  const data = await res.json(); //no need  callback function
};

// Caution node does not support fetch. This is for only educational purpose.



