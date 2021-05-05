// What is an API?
/*
   - Application Program Interface
   - Allows applications to communicate wiith one another.
   - NOT the database or server.
   - Allows us access point(s) to the server.
        - come in the form of an endpoint.
*/

// Ascynchronous Programming
/*
    - Allows a program to do more than one thing at a time.

    fetch ()
        - an asynchronous method
        - Is a part of the browswer window, NOT JavaScript.
        - Starts the process of fetching a resource from the network.
        - returns a promise which is fulfilled once the response is available.
    
    Promise(s)
        Always one of three states:
            - Pending
                - initial state, neither fulfilled or rejected.
            - Fulfilled
                - meaning the operation completed successfully.
            -Rejected
                - meaning the operation failed.
        With a fetch ()
            - will resolve into a Response object that represents the response of the request made.
*/

const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

// console.log(searchForm, spaceShips);

function fetchSpace() {
    event.preventDefault();
//      1
    fetch(baseURL)
        .then(results => {
            console.log(results);
//                     2
            return results.json();
        })
        .then(json => {
            console.log(json);
//                     3
            displayRockets(json);
        })
//          4
        .catch(err => console.log(err))
}

//REMEMBER FUNCTION MUST BE INVOKED// 
//fetchSpace();

/**
    1: fetch() method starts the process of fetching a resource from a network. Returns a promise which is fulfilled once the response is available.

    2: Capture the results fromt the API in a promsie resolver, received as a JSON*
        *JavaScript Object Notation
        - done by using the json() method.
            - returns a promise.

    3. A callback function that is to be executed after another function (first ".then") is resolved.

    4. Best practice for fetch is always including a .catch() method so we can catch any errors that occur throughout the fetch and promise process.

 */
function displayRockets(rockets){
    console.log("API Response: ",rockets);
    // When working with any API, we will always want to console.log the response to see how the data is structured so we can effectively step through it and grab what we need.

    rockets.forEach(r => {
        console.log(r);
        let rockets = document.createElement('li');
        rockets.innerText = r.name;
        spaceShips.appendChild(rockets);
    })
    // created elements
    let rocketOne = document.createElement('li');
    let rocketTwo = document.createElement('li');
    let rocketThree = document.createElement('li');
    let rocketFour = document.createElement('li');
    // add attributes
    rocketOne.innerText = `sample: ${rockets[0].name}`;
    rocketTwo.innerText = `sample: ${rockets[1].name}`;
    rocketThree.innerText = `sample: ${rockets[2].name}`;
    rocketFour.innerText = `sample: ${rockets[3].name}`;
    // placed our elements
    spaceShips.appendChild(rocketOne);
    spaceShips.appendChild(rocketTwo);
    spaceShips.appendChild(rocketThree);
    spaceShips.appendChild(rocketFour);
}

//! CHALLENGE:
/*
    Add the following functionality: 
    -When we click the submit button, the fetchSpace function should be invoked.
    note: comment out the line where we invoke it ourselves: fetchSpace()
*/

searchForm.addEventListener('submit', fetchSpace);