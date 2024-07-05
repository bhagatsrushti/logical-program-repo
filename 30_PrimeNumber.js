
console.log(`==============Step:01=================`);
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num%2 == 0) {
            return false;
        }
        return true;
    }
}

const result = isPrime(7);
const array = [3,9,7,6,19,29,53];
console.log(`My Array is Given : ${array}`);
let count = 0;
for (const num of array) {
    if (isPrime(num)) {
        count = count + 1;
        console.log(` Prime Number is:${num} `);
    }else{
        console.log(`is Not a Prime Number:${num} `);
    }
}
console.log(`Total Prime Number is : ${count}`);
console.log(`==============End=================`);