/*
Promise is a asynchronus action.
Every promise has 3 state. 
1. Pending 
2. Resolved
3. Rejected
* If we want to create any instance/object, we need to add new keyword before the instance.
* One promise object has 3 method to get data. 
    1. catch(if promise through an error)
    2. then(if promise is resolve)
    3. finally()
* We can use Promise.all method to get data at once.
*/


const myPromise = new Promise((resolve, reject) => {
    const user = 1;
    if (!user) {
        reject("something went wrong")
    } else {
        setTimeout(() => {
            resolve("name: John");
        }, 1000);
    }
});

const userIds = [1, 2, 3, 4, 5];
let userData = [];
for (let i = 0; i < userIds.length; i++) {
//   const userId = userIds[i];
  userData.push(myPromise)
}
Promise.all(userData).then(res=> console.log(res))
// consume/get data from promise 
myPromise
    .then(res => console.log(res))
    .catch(err => console.log("found in catch", err))
