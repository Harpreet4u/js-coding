"use strict";

// complexity: O(sqrt(n))

const isPrime = (num) => {
    
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }

    // Check for middle 5 number in below loop
    if (num%2 == 0 || num%3 == 0) {
        return false;
    }

    // Prime numbers are of the for 6K +- 1 e.g. 5, 7, 11, 13, ....
    for (let i = 5; i*i<=num; i=i+6) {
        if (num%i == 0 || num%(i+2) == 0) {
            return false;
        }
    }

    return true;
}


for (let i=0;i<100; ++i) {
    if (isPrime(i)) {
        console.log(`${i} is prime`);
    }
    
}
