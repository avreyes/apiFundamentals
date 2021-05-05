    //              1
function getData(callback) {
 //    2   
    setTimeout(() => {
 //         3
        callback("Some Data");
    }, 3000);
}
//          4
getData((data) => {
    console.log(data);
});
console.log('Hello World');

/*
    1: Added a parameter to the getData() function. This parameter is going to expect a callback function when invoked.
    2: Set the setTimeout() method. This will wait the alloted milliseconds(3000) before executing the code inside it.
    3: We grab the parameter, it's expecting a function to be invoked and send any data we receive ("same data").
    4: We invoke our getData() function with an anonymous function as the argument. This anonymous function simply console.logs the received data ("Some Data")
    
*/  