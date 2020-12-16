"use string";

// Rabin Karp Algo
// Complexity: best case without hits O(n-m+1) and worst case O(nm) if too many random hits
// Spurious hits can be avoided using good hash function

const search = (pattern, text, prime) => {
    const N = text.length;
    const M = pattern.length;
    let p = 0;
    let t = 0;
    let h = 1;

    const d = 256;

    // h is pow(d, N-1) mod prime
    for (let i=0;i<M-1;++i) {
        h = (d*h) % prime;
    }

    // initial window
    for (let i=0;i<M;++i) {
        p = (d*p + pattern.charCodeAt(i)) % prime
        t = (d*t + pattern.charCodeAt(i)) % prime
    }

    for (let i=0;i<N-M+1;++i) {
        if (p === t) {
            let j = 0;
            for (;j<M;++j) {
                if (pattern[j] !== text[i+j]) {
                    break;
                }
            }

            if (j===M) {
                console.log(`pattern found at index: ${i}`);
            }
        }

        if (i < N-M) {
            t = (d*(t-text.charCodeAt(i)*h) + text.charCodeAt(i+M)) % prime;

            if (t<0) {
                t = t + prime;
            }
        }
    }
}

console.log(search("aa", "aabjhgfkdulgaabldjgvbkeaa", 101));
