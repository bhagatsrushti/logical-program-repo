
console.log(`=============Step:01===============`);

function isPalindrome(str) {
    const normalizedStr = str.toLowerCase();
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}

// Test strings
const testStrings = ["madam:", "141:", "Sunday:", "mom:", "listen:", "dad:"];


testStrings.forEach(str => {
    if (isPalindrome(str)) {
        console.log(`"${str}" is a palindrome.`);
    } else {
        console.log(`"${str}" is not a palindrome.`);
    }
});
console.log(`=============End===============`);
