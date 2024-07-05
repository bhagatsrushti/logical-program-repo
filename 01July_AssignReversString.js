
console.log(`============Step:01=============`);
console.log(`Reverse the string using any existing method`);
function reversMethod(str) {
   return str.split('').reverse().join(''); 
}

const str1 ="software";
const str1_reversed = reversMethod(str1);
console.log(str1_reversed);

const str2 ="UI Developer";
const str2_reversed = reversMethod(str2);
console.log(str2_reversed);
console.log(`__________________________________________________________________________`);

console.log(`============Step:02=============`);
console.log(`Reverse the string without using predefined methods`);

function reversPredefineMethod (str) {
    let reversedString ="";
    for (let i = str.length -1; i>=0; i--) {
      
        reversedString += str[i];
    }
    return reversedString;
}

let string1 ="Web Developer";
let string1Reversed = reversPredefineMethod(string1);
console.log(string1Reversed);


let string2 ="Billion Doller";
let string2Reversed = reversPredefineMethod(string2);
console.log(string2Reversed);

let string3 ="Java";
let string3Reversed = reversPredefineMethod(string3);
console.log(string3Reversed);
console.log(`__________________________________________________________________________`);
console.log(`============END=============`);