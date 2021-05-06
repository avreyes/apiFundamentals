//! Async
/*
    - Introduced in ES2017
    - Async Functions can be thought of as an alternate way of writing promise-based code.
    - Avoid chaining promises.
    - Allows us to program using asynchronous requests, (API requests), in a "synchronous" manner.
        - Synchronous code is executed in sequence.  Each statement waits for the previous statement to finish before executing.
    - Helps keep our site or app responsive, reducing waiting time for the user.
    New Keywords:
        - async
        - await
*/
async function myFnOne() {
    // await ...
}
const myFnTwo = async () => {
    // await ...
}
const myFnThree = () => {
    // await ... (syntax error since this function is NOT declared an async function)
}
// Async Functions are normal JS function with one key difference:  Thy alawys return a promise.
async function fn() {
    return 'hello';
}
fn().then(console.log);
fn().then(data => {
    console.log(data);
})
/*
    - fn() retruns a resolved promise of "hello".
    - The return value of 'hello' is wrapped in a promise via the promise constructor.  The body of an async function is always wrapped in a new promise.
*/
function fnAgain() {
    return Promise.resolve('Hello');
}
fnAgain().then(console.log);
async function foo() {
    throw Error('this is a mistake');
}
// foo().catch(console.log);
// foo().then(console.log);
/*
    foo will return a rejected promise if the error is uncaught.  
    async function will always return whatever you want to return, but you will always get a promise out of an async function.
*/
//! Await
/*
    - Only used within an async function
    - tells JS that there is a promise returning and that we want to invoke and wait on the response before moving on to the next line.
    let testResponse = await somePromiseRetuningFunction();
*/
function firstLockBox() {
    return new Promise(function(resolve, reject) {
        if(true) {
            resolve(12345);
        } else {
            reject(Error('Unexpected Error'));
        }
    })
}
function secondLockBox(key) {
    return new Promise(function(resolve, reject) {
        if(key === 12345) {
            resolve(98765);
        } else {
            reject(Error('Wrong Key'));
        }
    })
}
function thirdLockBox(key) {
    return new Promise(function(resolve,reject) {
        if(key === 98765) {
            resolve("Treasure Struck!");
        } else {
            reject(Error("Wrong Key"));
        }
    })
}
async function openBoxes() {
    let firstBox = await firstLockBox();
    console.log(firstBox);
    let secondBox = await secondLockBox(firstBox);
    console.log(secondBox);
    let thirdBox = await thirdLockBox(secondBox);
    console.log(thirdBox);
}
openBoxes();
console.log("Hello World");