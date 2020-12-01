"use strict";


const generateRandomNumberInRange = (min, max) => {

    return Math.floor(Math.random()*(max-min+1)+min);
};


console.log(generateRandomNumberInRange(3, 5));

for (let i=0;i<100;++i) {
    console.log(generateRandomNumberInRange(23, 200));
}
