/* ******************************************

CALLBACKS

function callbackFunction(){
    const data = {
        name: 'Ralf Machio',
        age: 66,
        occupation: 'kickboxing'
    }
    return data;
}

function showGreeting(dataFromFunction){
    return "hello" + dataFromFunction.name + ", I hear you're the greatest?!"
}
console.log(
    showGreeting(callbackFunction())
)

function callbackFunction(){
    for(let i = 0; i < 100; i++){
        console.log(i)
    }
    const data = {
        name: 'Ralf Machio',
        age: 66,
        occupation: 'kickboxing'
    }
    return data;
}

function showData(dataFromFunction){
    return "hello " + dataFromFunction.name
}

console.log(showData(callbackFunction())
)
********************************************* */


/* PROMISES */

// Boolean declaration
var amIGood = false;

// Promise
var iCanHasGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: 'HasMattelbro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift); // fulfilled
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty); // rejected
        }
    }
);

// Proper syntax for a promise 
/*new Promise(/* executor */ /* function (resolve, reject) {...} ); */ 

// Promise call
var checkTwice = function () {
    iCanHasGift
        .then(function (fulfilled) {
            // nice list = gift
            console.log(fulfilled);
        // output: { brand: 'HasMattelbro', item: 'Turbo-Man action figure'}
        })
        .catch(function (error) {
            // naughty list = coal
            console.log(error);
        // output: "You've made Santa's naughty list; enjoy your coal!"
        });
};

checkTwice();

// 2nd promise
var playDate = function (gift) {
    return new Promise(
        function (resolve, reject) {
            var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';
                resolve(message);
        }
    );
};

// Promise call
var checkTwice = function () {
    console.log('before Christmas'); // log before
    iCanHasGift
        .then(playDate)
        .then(function (fulfilled){
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error)
        });
    console.log('after opening gifts'); // log after
};

checkTwice();

// 2nd promise
var playDate = function (gift) {
    return new Promise(
        function (resolve, reject) {
            var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yuletide season. What do you think of my new " + gift.brand + ' ' + gift.item 
            + '?';
                resolve(message);
        }
    );
};
// 2nd promise
var playDate = function (gift) {
    var message = "salutations, fellow child I enjoy interacting with! I notice you received a posable plastic Batman figuring during the Yuletide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';
    return Promise.resolve(message);
};
//Promise call
var checkTwice = function () {
    iCanHasGift
    .then(playDate) // chain here
    .then(function (fulfilled) {
        console.log(fulfilled);
    })
    .catch(function(error) {
        // all I got was a lump of coal :(
        console.log(error)
        // output: "You've made Santa's naughty list; enjoy your coal!"
    });
};

checkTwice();
