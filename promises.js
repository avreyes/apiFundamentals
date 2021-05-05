/* Promise:
    Have 3 states:
        - pending - undefined results
        - fulfilled - value result
        - rejected - error object result
*/
function getData() {
    //                1
        return new Promise((resolve, reject) => {
            setTimeout(() => {
    //              2
                if(true) {
                    resolve('Some Data');
                } else {
                    reject('Error');
                }
            }, 3000);
        })
    }
    getData()
    //    3
        .then(data => console.log(data))
    //    4
        .catch(error => console.log(error))
    // console.log(data);
    /*  
        1: Creating a new instance of the promise class using the constructor.  This constructor expects a function with two parameters, resolve and reject.
            - Resolve & reject are callback functions built into the promise class constructor.
        2: Set up a conditional to direct if it should resolve or reject it. (resolve: "Some Data" / reject: "Error")
        3: When invoked (getData()), returns a promise.  Must append promise resolvers to the end of the function call (.then()).
            .then() method is our promise resolver.  These take in a function to execute once the promise is received.
        4: .catch() method handles the reject cases.  Good practice to include these so we don't have an unhandled rejections.
    */