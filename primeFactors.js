"use strict";

// Complexity: O(sqrt(n))

const primeFactors = (num) => {
    if (num === 1 || num === 0) {
        console.log("0 cannot have prime factors and 1 is neither prime nor a composite number. It belongs to element class called units.");
        return;
    }
        
    while (num%2 == 0) {
        console.log("2");
        num = num / 2;
    }

    // Now number would be odd at this place and can skip evens now.
    for (let i=3; i*i <= num; i+=2) {
        while(num%i == 0) {
            console.log(i);
            num = num / i;
        }
    }

    // number would be prime here
    if (num > 2) {
        console.log(num);
    }

};


for (let i=0; i<30; i++) {
    console.log(`prime factors of ${i}`);
    primeFactors(i);
}
